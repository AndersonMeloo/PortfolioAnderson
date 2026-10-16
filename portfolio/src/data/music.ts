/**
 * Faixas do player da hero (tocam em sequência com ⏮ / ⏭).
 *
 * Use prévias oficiais de 30s (Apple Music/iTunes), que são liberadas para uso
 * promocional com link para a música. Para trocar de faixa:
 *  1. Busque: https://itunes.apple.com/search?term=ARTISTA+MUSICA&entity=song&country=br
 *  2. Copie `previewUrl` → src, `artworkUrl100` (troque 100x100 por 300x300) → cover,
 *     e `trackViewUrl` → link.
 * Também aceita arquivos próprios em /public (ex.: "/music/faixa.mp3") que você tenha direito de usar.
 * Sem `src`, o botão de play fica desativado.
 */
export interface Track {
  title: string;
  artist: string;
  album?: string;
  /** URL do áudio (prévia oficial ou arquivo em /public). */
  src?: string;
  /** URL da capa (quadrada). Sem capa, mostra um gradiente. */
  cover?: string;
  /** Página da música (atribuição). O título vira link para ela. */
  link?: string;
}

export const tracks: Track[] = [
  {
    title: "Psycho Killer",
    artist: "Talking Heads",
    album: "Talking Heads: 77",
    src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/cb/62/a2/cb62a292-2d2b-44f9-e840-fdb836438eba/mzaf_18441340446140478883.plus.aac.p.m4a",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music/f0/7a/44/mzi.gxryruwe.jpg/300x300bb.jpg",
    link: "https://music.apple.com/br/album/psycho-killer/120135545?i=120135389",
  },
  {
    title: "Never Gonna Give You Up",
    artist: "Rick Astley",
    album: "Whenever You Need Somebody",
    src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/62/ff/3a/62ff3abe-bc6d-a7d0-31b0-71cbec9aaa24/mzaf_13802296211720217737.plus.aac.p.m4a",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/ce/6d/5b/ce6d5b48-8c36-b990-3b9c-81862fadb459/0859381157694.jpg/300x300bb.jpg",
    link: "https://music.apple.com/br/album/never-gonna-give-you-up/1559885420?i=1559885421",
  },
  {
    title: "Sweet Dreams (Are Made of This)",
    artist: "Eurythmics",
    album: "Sweet Dreams (Are Made Of This)",
    src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/08/46/96/084696fe-bc36-8669-9dfc-4cf046e3ac55/mzaf_16321209338738959129.plus.aac.p.m4a",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/e6/b7/c0/e6b7c046-af63-77ab-d227-7015d4bb7aeb/888880792679.jpg/300x300bb.jpg",
    link: "https://music.apple.com/br/album/sweet-dreams-are-made-of-this/1308528887?i=1308528894",
  },
];
