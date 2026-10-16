"use client";

import { useEffect, useState } from "react";
import { Cloud, CloudDrizzle, CloudFog, CloudLightning, CloudRain, CloudSnow, CloudSun, Sun, type LucideIcon } from "lucide-react";
import { profile } from "@/data/profile";
import { Widget } from "@/components/ui/Widget";

interface Day {
  date: string;
  code: number;
  max: number;
}
interface Forecast {
  current: number;
  days: Day[];
}

const REFRESH_MS = 30 * 60 * 1000;
const RETRY_MS = 15 * 1000;
const weekday = new Intl.DateTimeFormat("pt-BR", { weekday: "short", timeZone: "UTC" });

/** Códigos WMO da Open-Meteo → ícone e cor. */
function iconFor(code: number): { Icon: LucideIcon; color: string } {
  if (code <= 1) return { Icon: Sun, color: "#FFB800" };
  if (code === 2) return { Icon: CloudSun, color: "#F5A623" };
  if (code === 3) return { Icon: Cloud, color: "#A3A8B0" };
  if (code === 45 || code === 48) return { Icon: CloudFog, color: "#A3A8B0" };
  if (code >= 51 && code <= 57) return { Icon: CloudDrizzle, color: "#5AA9F5" };
  if ((code >= 61 && code <= 67) || (code >= 80 && code <= 82)) return { Icon: CloudRain, color: "#3E8FE4" };
  if ((code >= 71 && code <= 77) || code === 85 || code === 86) return { Icon: CloudSnow, color: "#8EC5F5" };
  return { Icon: CloudLightning, color: "#7C6CF0" };
}

async function fetchForecast(signal: AbortSignal): Promise<Forecast> {
  const { latitude, longitude } = profile.weather;
  const params = new URLSearchParams({
    latitude: String(latitude),
    longitude: String(longitude),
    current: "temperature_2m",
    daily: "weather_code,temperature_2m_max",
    timezone: "auto",
    forecast_days: "7",
  });
  const res = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`, { signal });
  if (!res.ok) throw new Error(`Open-Meteo ${res.status}`);
  const data = await res.json();
  return {
    current: Math.round(data.current.temperature_2m),
    days: data.daily.time.map((date: string, i: number) => ({
      date,
      code: data.daily.weather_code[i],
      max: Math.round(data.daily.temperature_2m_max[i]),
    })),
  };
}

/** Previsão de 7 dias em tempo real (equivalente ao widget "Madrid" da referência). */
export function WeatherWidget() {
  const [forecast, setForecast] = useState<Forecast | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const ctrl = new AbortController();
    let retry: ReturnType<typeof setTimeout> | undefined;
    const load = () =>
      fetchForecast(ctrl.signal)
        .then((f) => {
          setForecast(f);
          setFailed(false);
        })
        .catch((e) => {
          if (ctrl.signal.aborted) return; // desmontado (ou remontagem do StrictMode em dev)
          setFailed(true);
          retry = setTimeout(load, RETRY_MS); // falha momentânea: tenta de novo logo
          if (process.env.NODE_ENV !== "production") console.warn(e);
        });
    load();
    const id = setInterval(load, REFRESH_MS);
    return () => {
      ctrl.abort();
      clearInterval(id);
      clearTimeout(retry);
    };
  }, []);

  return (
    <Widget className="h-[110px] w-[320px] px-4 pt-3.5">
      <div className="flex items-baseline justify-between">
        <p className="text-[10px] font-semibold text-black/55">{profile.weather.city}</p>
        <p className="text-[10px] font-medium text-black/40 tabular-nums">
          {forecast ? `${forecast.current}° agora` : failed ? "indisponível" : " "}
        </p>
      </div>
      <ul className="mt-3 grid grid-cols-7 text-center" aria-label={`Previsão do tempo — ${profile.weather.city}`}>
        {(forecast?.days ?? Array.from({ length: 7 }, () => null)).map((d, i) => {
          if (!d)
            return (
              <li key={i} className="flex flex-col items-center gap-2" aria-hidden>
                <span className="h-2 w-4 rounded bg-black/5" />
                <span className="h-3.5 w-3.5 rounded-full bg-black/5" />
                <span className="h-2 w-5 rounded bg-black/5" />
              </li>
            );
          const { Icon, color } = iconFor(d.code);
          const label = weekday.format(new Date(`${d.date}T12:00:00Z`)).replace(".", "");
          return (
            <li key={d.date} className="flex flex-col items-center gap-2">
              <span className="text-[8px] font-semibold text-black/40 capitalize">{label}</span>
              <Icon className="h-3.5 w-3.5" color={color} fill={color} fillOpacity={0.25} strokeWidth={2} aria-hidden />
              <span className="text-[9px] font-medium text-black/55 tabular-nums">
                {d.max}°<span className="sr-only"> máxima</span>
              </span>
            </li>
          );
        })}
      </ul>
    </Widget>
  );
}
