export function criarEstrelas(): void {
  const containerDasEstrelas = document.getElementById('star-container');
  if (!containerDasEstrelas) return;
  if (containerDasEstrelas.children.length >= 300) return;

  const estrelas = document.createElement('div');
  const isWhite = Math.random() > 0.5;
  estrelas.className = isWhite ? 'star-white' : 'star-gray';

  const pageHeight = document.documentElement.scrollHeight;
  estrelas.style.top = `${Math.random() * pageHeight}px`;
  estrelas.style.left = '-2px';

  const duration = Math.random() * 5 + 3;
  estrelas.style.animationDuration = `${duration}s`;

  containerDasEstrelas.appendChild(estrelas);

  estrelas.addEventListener('animationend', () => {
    estrelas.remove();
  });
}

export function comecaCriandoEstrelas(interval: number = 100): void {
  setInterval(criarEstrelas, interval);
}
