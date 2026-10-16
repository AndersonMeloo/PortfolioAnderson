"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Pause, Play, SkipBack, SkipForward } from "lucide-react";
import { tracks } from "@/data/music";
import { Widget } from "@/components/ui/Widget";

const fmt = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

/** Player de música (equivalente ao widget "Psycho Killer" da referência). */
export function MusicWidget() {
  const audio = useRef<HTMLAudioElement>(null);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const track = tracks[index];
  const playable = Boolean(track?.src);

  // Metadados que carregaram antes da hidratação: lê a duração já disponível.
  useEffect(() => {
    const d = audio.current?.duration;
    if (d && Number.isFinite(d)) setDuration(d);
  }, [index]);

  // Ao trocar de faixa, continua tocando se já estava tocando.
  useEffect(() => {
    const el = audio.current;
    if (el && playing && playable) el.play().catch(() => setPlaying(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  if (!track) return null;

  const toggle = () => {
    const el = audio.current;
    if (!el || !playable) return;
    if (el.paused) el.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    else {
      el.pause();
      setPlaying(false);
    }
  };
  const skip = (dir: 1 | -1) => {
    if (dir === -1 && audio.current && audio.current.currentTime > 3) {
      audio.current.currentTime = 0;
      return;
    }
    setTime(0);
    setIndex((i) => (i + dir + tracks.length) % tracks.length);
  };
  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = audio.current;
    if (!el || !duration) return;
    const r = e.currentTarget.getBoundingClientRect();
    el.currentTime = ((e.clientX - r.left) / r.width) * duration;
  };

  const btn =
    "flex h-6 w-6 cursor-pointer items-center justify-center rounded text-black/75 transition-colors hover:text-black disabled:cursor-not-allowed disabled:opacity-30";

  return (
    <Widget className="h-[150px] w-[320px] p-4">
      {playable && (
        <audio
          ref={audio}
          src={track.src}
          preload="metadata"
          // Os metadados podem carregar antes da hidratação (e o loadedmetadata se perder),
          // então a duração também é lida no durationchange e a cada timeupdate.
          onTimeUpdate={(e) => {
            setTime(e.currentTarget.currentTime);
            if (Number.isFinite(e.currentTarget.duration)) setDuration(e.currentTarget.duration);
          }}
          onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
          onDurationChange={(e) => Number.isFinite(e.currentTarget.duration) && setDuration(e.currentTarget.duration)}
          onEnded={() => (tracks.length > 1 ? skip(1) : setPlaying(false))}
        />
      )}
      <div className="flex gap-3.5">
        <div className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-lg bg-gradient-to-br from-[#F7684A] to-[#E2452B] shadow-[0_2px_8px_rgba(0,0,0,0.15)]">
          {track.cover && <Image src={track.cover} alt={`Capa de ${track.album ?? track.title}`} fill sizes="72px" className="object-cover" draggable={false} />}
        </div>
        <div className="min-w-0 pt-1">
          <p className="truncate text-[13px] leading-[19.5px] font-semibold text-black/85">
            {track.link ? (
              <a href={track.link} target="_blank" rel="noopener noreferrer" className="hover:underline" title="Ouvir completa na Apple Music">
                {track.title}
              </a>
            ) : (
              track.title
            )}
          </p>
          <p className="truncate text-[11px] leading-[16.5px] text-black/45">
            {track.artist}
            {track.album && ` — ${track.album}`}
          </p>
          <div className="mt-2.5 flex items-center gap-3">
            <button type="button" className={btn} onClick={() => skip(-1)} disabled={!playable} aria-label="Faixa anterior">
              <SkipBack className="h-3.5 w-3.5" fill="currentColor" />
            </button>
            <button type="button" className={btn} onClick={toggle} disabled={!playable} aria-label={playing ? "Pausar" : "Tocar"}>
              {playing ? <Pause className="h-4 w-4" fill="currentColor" /> : <Play className="h-4 w-4" fill="currentColor" />}
            </button>
            <button type="button" className={btn} onClick={() => skip(1)} disabled={!playable} aria-label="Próxima faixa">
              <SkipForward className="h-3.5 w-3.5" fill="currentColor" />
            </button>
          </div>
        </div>
      </div>
      <div
        role="slider"
        aria-label="Progresso da música"
        aria-valuemin={0}
        aria-valuemax={Math.round(duration)}
        aria-valuenow={Math.round(time)}
        tabIndex={playable ? 0 : -1}
        onClick={seek}
        onKeyDown={(e) => {
          if (!audio.current) return;
          if (e.key === "ArrowRight") audio.current.currentTime += 5;
          if (e.key === "ArrowLeft") audio.current.currentTime -= 5;
        }}
        className="mt-3 flex h-3 cursor-pointer items-center"
      >
        <div className="h-[3px] w-full rounded-full bg-black/10">
          <div className="h-full rounded-full bg-black/40" style={{ width: duration ? `${(time / duration) * 100}%` : "0%" }} />
        </div>
      </div>
      <div className="flex justify-between text-[9px] text-black/35 tabular-nums">
        <span>{fmt(time)}</span>
        <span>-{fmt(Math.max(0, duration - time))}</span>
      </div>
    </Widget>
  );
}
