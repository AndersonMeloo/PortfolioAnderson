# Auditoria da referência — elenagonci.com

Capturado em 15/10/2026 com Playwright (Chromium headless), viewports **1440×900** (desktop) e **390×844** (mobile, `isMobile`).
Screenshots em `artifacts/reference/`. Tudo abaixo foi observado nas capturas, no DOM renderizado (`_body.html`, `_dom-info.json`) ou nos bundles JS da página. Itens não verificados estão marcados como tal.

## Arquivos de captura

| Arquivo | Conteúdo |
| --- | --- |
| `desktop-00-hero.png` | Primeira dobra desktop |
| `desktop-01…14-scroll.png` | Scroll progressivo (passos de 540 px, roda do mouse) |
| `mobile-00-hero.png`, `mobile-01…17-scroll.png` | Mesmo processo no mobile |
| `desktop-state-intro-400ms/800ms/1400ms.png` | Animação de entrada |
| `desktop-state-dock-hover.png` | Magnificação + tooltip do dock |
| `desktop-state-folder-hover.png`, `desktop-state-folder-click.png` | Hover e clique numa pasta do desktop |
| `desktop-state-widget-dragging.png`, `desktop-state-widget-dropped.png` | Arrastar widget |
| `desktop-state-hero-link-hover.png` | Hover no link sublinhado do título |
| `desktop-state-achievement-hover.png` | Hover num card de conquista |
| `desktop-state-press-t0.png`, `desktop-state-press-t2s.png`, `desktop-state-press-hover.png` | Carrossel de imprensa em movimento |
| `desktop-state-highlight-row-hover.png` | Lista de trabalhos |
| `desktop-state-playground*.png` | Pasta "Playground" em repouso, hover e após clique |
| `desktop-state-about-future-open.png` | Janela "about-me.txt" com "The future" expandido |
| `desktop-state-footer-link-hover.png` | Hover em link do rodapé |

## Stack técnica observada

- Next.js (chunks `/_next/static`, build com Turbopack) + Tailwind (classes utilitárias no DOM).
- Animações com **framer-motion** (`whileInView`, `variants`, `useSpring`, `drag`). **Não** usa GSAP nem Lenis (0 ocorrências nos bundles).
- Fontes: **Bricolage Grotesque** (corpo e títulos) e **Clepto** (`clepto-s.p.otf`, só no monograma do logo — fonte proprietária, não reutilizada).

## Linguagem visual

- Metáfora de **desktop do macOS**: barra de menus, widgets, pastas, dock, janelas com semáforos.
- Fundo da hero `#fafafa`; seções `#ffffff` e `#fafafa` alternadas; separadores `border-black/10`.
- Texto: preto puro nos títulos; cinzas por opacidade (`black/55`, `black/50`, `black/45`, `black/35`).
- Sombras suaves e grandes (`0 8px 32px rgba(0,0,0,.12)`); cantos de 16–28 px.
- Acentos: azul botão `#57A4F0` (hover `#3E8FE4`), azul seleção de pasta `#0069d9`, amarelo nota `#F4DA71 → #DFBA35`, vermelho calendário `#FF3B30`.

### Tipografia medida (desktop)

| Elemento | Tamanho / peso / entrelinha / tracking |
| --- | --- |
| H1 hero | 48 px / 800 / 1.05 / −1.2 px |
| Subtítulo hero | 16 px / 400 / 26 px / `black/50` |
| H2 de seção | 30 px / 800 / 36 px / −0.75 px |
| H2 dentro das pastas | 30 px / 700 / 1.25 |
| Título de card | 15 px / 700 |
| Descrição de card | 14 px / 400 / `black/55` |
| Aba da pasta | 13 px / 700 / uppercase / tracking 0.08 em / `black/50` |
| Eyebrow ("Superpower nº1") | 10 px / 600 / uppercase / tracking 0.15 em / `black/35` |
| "The Playground" | 72 px / 800 / −1.8 px |
| Barra de menus | 11 px / 500 |

## Estrutura (de cima para baixo)

1. **Barra de menus** (desktop) — 28 px, `bg-white/70` + blur, borda inferior. Esquerda: monograma, nome, cargo. Direita: data e hora ao vivo.
2. **Hero / desktop** (`100dvh`, `#fafafa`):
   - Coluna esquerda de widgets: relógio analógico com cidade, calendário do mês com dia atual destacado, player de música, previsão do tempo em 7 dias, foto.
   - Centro: H1 em duas linhas com o nome da empresa como link sublinhado + subtítulo centralizado (max ~540 px).
   - Coluna direita: 5 pastas azuis empilhadas (ícone 56 px + rótulo com fundo `white/70`), `right: 2.5%`, passos de 108 px.
   - Inferior direito: widget com grade 5×2 de ícones de apps/ferramentas.
   - **Todos os widgets e pastas são arrastáveis** (`drag`, `dragElastic .12`, `dragMomentum false`, `whileDrag scale 1.04`).
3. **Dock** — glass (`bg-white/30`, `backdrop-blur-2xl`, borda `white/45`), 6 ícones de 40 px com cantos 24%, divisor após o primeiro. Começa no fim da hero (≈ y 772) e fica **sticky em `top: 16px`** durante todo o scroll.
4. **Achievements** (`#achievements`, branco) — H2 + 5 cards em linha: caixa `#f5f5f5` com borda, ícone de app em gradiente 72 px centralizado, título e descrição abaixo.
5. **In the press** (`#press`, `#fafafa`) — carrossel horizontal **infinito e automático** de cards brancos (logo, título, "Read the article ↗"), com fade nas bordas.
6. **Pilares em pastas empilhadas** (`#pillar-stack`) — 4 "pastas", cada uma `position: sticky; top: 96px; height: calc(100dvh - 6rem)` com `z-index` crescente: a próxima pasta desliza por cima da anterior. Cada pasta tem:
   - Aba com recorte em `clip-path` (curva) + faixa `#e5e7eb`, rótulo em caixa alta.
   - Corpo com gradiente `#f7f8fa → #f0f2f5 → #e7e9ed`, cantos 28 px.
   - Grid `0.9fr / 1.1fr`: eyebrow, H2, parágrafo, botões pílula azuis | **nota amarela** (cabeçalho em gradiente amarelo, corpo vidro `white/60`, lista de 3 itens com título + descrição). Nota sobe 6 px no hover com sombra maior.
   - No mobile as pastas não são sticky (`max-md:static`) e as descrições da nota ficam ocultas.
7. **Lista de trabalhos** (`#highlights`) — H2 + legenda à direita; linhas com título em negrito à esquerda e descrição alinhada à direita (max-w-md), separadas por `border-black/10`. Cada linha entra com `opacity 0→1` e `translateY → 0` (`duration-700 ease-out`, com `transition-delay` escalonado).
8. **Playground** (`#playground`) — "The [pasta] Playground" em 72 px; a pasta 3D tem 3 cartões dentro. **Hover**: a frente da pasta inclina (`perspective(700px) rotateX(-24deg)`), os cartões sobem e giram (±12°), aparece uma pílula amarela "View". Transições de 300 ms.
9. **about-me.txt** (`#about`) — janela macOS com semáforos e título centralizado; duas colunas "THEN" / "NOW"; botão "THE FUTURE +" expande um terceiro texto.
10. **Rodapé** (`#contact`) — monograma + nome + frase; linha de ícones sociais; coluna de links com seta "→"; selos de prêmios e © ano.

## Animações e comportamentos verificados

| Efeito | Detalhe verificado |
| --- | --- |
| Entrada da hero | Título aparece primeiro; pastas e widgets surgem em sequência (`hidden {opacity:0, y:8}` → `show`), `staggerChildren .05`, `delayChildren .08`. Visto nos frames de 400/800/1400 ms. |
| Dock (magnificação) | Largura via mola (`mass .1, stiffness 180, damping 13`) em função da distância do cursor ao centro do ícone: repouso **40 px**, pico **60 px**, raio **100 px**. Tooltip escuro com o nome acima do ícone. |
| Dock sticky | Fica em `top: 16px` após sair da hero. |
| Pastas da hero | Hover: ícone `scale(1.05)` e rótulo com fundo `#0069d9` e texto branco. Clique navega para `/work/<slug>` (página de case study com chat). |
| Link do título | Sublinhado cinza grosso sob a palavra da empresa. |
| Pastas empilhadas | CSS `sticky` com z-index crescente (sem JS). |
| Lista de trabalhos | Reveal por linha ao entrar na viewport, 700 ms, atraso escalonado. |
| Carrossel de imprensa | Movimento contínuo (posição diferente entre t0 e t+2 s). |
| Nota amarela | `hover:-translate-y-1.5` + sombra maior, 300 ms. |
| Playground | Pasta abre no hover (ver item 8). |
| about-me.txt | Acordeão "The future". |

## Mobile (390 px)

- Sem barra de menus. A hero vira uma pilha: card branco com H1 (≈ 30 px) e subtítulo; linha com card de calendário ("Tap to book a meeting") + foto; grade 4 colunas de pastas; card com grade de apps.
- Dock fixo no topo (sticky `top: 16px`) desde o início do scroll.
- Achievements em 2 colunas; imprensa como carrossel; pastas empilhadas sem sticky; lista de trabalhos com descrição abaixo do título; "The / Playground" quebra em duas linhas; rodapé em coluna única.

## Não verificado / fora de escopo

- Conteúdo das páginas `/work/*` e `/playground` além da primeira tela (não reproduzidas).
- Áudio do player (não testado).
- Selo "W. Nominee" (Awwwards) e selos CSS Design Awards — identidade de terceiros, não reproduzidos.
