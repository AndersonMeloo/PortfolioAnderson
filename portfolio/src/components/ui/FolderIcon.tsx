/**
 * Gradientes compartilhados pelas pastas. Renderizado uma vez na página, fora de
 * qualquer bloco com display:none (gradientes definidos em subárvores ocultas não pintam).
 */
export function FolderIconDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden focusable="false">
      <defs>
        <linearGradient id="folder-back" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5BB8F0" />
          <stop offset="1" stopColor="#3FA2E4" />
        </linearGradient>
        <linearGradient id="folder-front" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8DD7FC" />
          <stop offset="1" stopColor="#62C1F5" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/** Pasta no estilo Finder, desenhada em SVG. Requer <FolderIconDefs /> na página. */
export function FolderIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 52" className={className} aria-hidden>
      <path d="M4 6a4 4 0 0 1 4-4h14.5c1.3 0 2.5.6 3.2 1.6L28 7h28a4 4 0 0 1 4 4v33a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z" fill="url(#folder-back)" />
      <path d="M2 15a4 4 0 0 1 4-4h52a4 4 0 0 1 4 4v29a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5z" fill="url(#folder-front)" />
      <path d="M2 15a4 4 0 0 1 4-4h52a4 4 0 0 1 4 4" fill="none" stroke="#fff" strokeOpacity=".55" />
    </svg>
  );
}
