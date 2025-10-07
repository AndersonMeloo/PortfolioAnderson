let cursorInitialized = false;

export default function initCustomCursor(): void {
  if (cursorInitialized || typeof window === 'undefined') return;

  const cursor: HTMLDivElement = document.createElement('div');
  cursor.classList.add('cursor');
  document.body.appendChild(cursor);

  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;

  document.addEventListener('mousemove', (e: MouseEvent) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate(): void {
    cursorX += (mouseX - cursorX) * 1.0;
    cursorY += (mouseY - cursorY) * 1.0;

    cursor.style.transform = `translate(${cursorX - 10}px, ${cursorY - 10}px)`;
    requestAnimationFrame(animate);
  }
  animate();

  const interactiveElements = document.querySelectorAll<HTMLElement>('a, button');
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('fill'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('fill'));
  });

  cursorInitialized = true;
}