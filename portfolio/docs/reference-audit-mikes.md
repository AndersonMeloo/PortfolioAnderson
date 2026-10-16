# Auditoria da referência — mikes.cv (base da página /system-design)

Capturado em 15/10/2026 com Playwright, 1440×900 e 390×844. Screenshots em `artifacts/reference-mikes/`.
Somente o que foi observado nas capturas, no DOM e nos recursos carregados.

## Capturas

| Arquivo | Conteúdo |
| --- | --- |
| `desktop-00-hero.png` … `desktop-03-scroll.png` | Página inteira com scroll progressivo |
| `mobile-00-hero.png` … `mobile-05-scroll.png` | Mesmo processo no mobile |
| `desktop-state-window-t0/t2s.png`, `desktop-state-window-hover.png` | Janela em repouso, após 2 s e em hover |
| `desktop-state-project-hover.png` | Hover numa linha de projeto |
| `desktop-state-scroll-700.png` | Linha do tempo parcialmente preenchida |
| `desktop-state-photos-hover.png` | Hover nas fotos finais |

## Linguagem visual

- Metáfora de **voo**: janela de avião, "flight plan", códigos de rota (`NYC>MAN`), "Thank you for flying".
- Fundo `rgb(250,245,245)` (off-white quente). Uma única cor de acento: azul `rgb(58,83,237)`.
- Duas famílias: **sans** ("MB Sans", 14–16 px, peso 400/500) e **mono** em caixa alta com tracking largo ("MB Mono", 6–12 px, tracking 0,6–1,8 px). Ambas proprietárias.
- Coluna central estreita (~560 px), muito espaço em branco.

## Estrutura

1. **Bloco fixo à esquerda** (`aside.folio-sticky`, `position: fixed`): nome, cidade, coordenadas, fuso — mono, com uma barra pontilhada vertical à esquerda. No mobile vira um bloco centralizado no topo.
2. **Janela de avião** (camadas de imagem: fundo, persiana, moldura, nuvem). É um botão ("Close the window shade").
3. **Título + subtítulo** centralizados (sans 16 px / 16 px cinza).
4. **"Flight plan"**: rótulo mono 6 px azul + ícone de avião; uma trilha tracejada curva desce até a linha do tempo.
5. **Linha do tempo**: à esquerda, código de rota (mono 6 px) + ano (mono 12 px); ponto na linha; à direita, logos sobrepostos, empresa (+ etiqueta "CURRENT" em azul mono), cargo, descrição e linhas de projeto (miniaturas em leque + nome + descrição).
6. **Encerramento**: "Thank you for flying. See you again soon." + leque de fotos.
7. **Rodapé fixo** (`footer.folio-footer`): links X · LINKEDIN · EMAIL em mono, sobre um degradê fixo (`.folio-footer-fx`) que esmaece/desfoca o conteúdo que passa por baixo.

## Efeitos verificados

| Efeito | Observação |
| --- | --- |
| Persiana da janela | Sobe no hover; a janela é clicável (abre/fecha a persiana). |
| Progresso da linha do tempo | A linha fica azul conforme o scroll; os pontos acendem ao serem alcançados (comparar `desktop-00` com `desktop-state-scroll-700`). |
| Linhas de projeto | Hover adiciona fundo arredondado e abre as miniaturas em leque. |
| Fotos finais | Hover sobe a foto e mostra uma etiqueta escura em mono. |
| Rodapé | Conteúdo abaixo de ~80% da altura fica esmaecido/desfocado. |

## Não verificado

- Se as nuvens se movem sozinhas (t0 e t+2 s parecem iguais na captura).
- Bibliotecas de animação (bundle único `index-*.js`, não inspecionado).

## Adaptação para /system-design

- Conteúdo: trilha de estudo de System Design (blocos e tópicos confirmados pelo usuário).
- Fontes livres equivalentes: **Geist** e **Geist Mono**.
- Janela, nuvens e miniaturas desenhadas em código (sem reutilizar imagens do site).
- Efeitos com GSAP + ScrollTrigger, respeitando `prefers-reduced-motion`.
