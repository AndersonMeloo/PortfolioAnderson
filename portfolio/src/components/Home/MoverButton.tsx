import styles from './move.module.scss';
import { useRef } from 'react';

type BotaoInterativoProps = {
    children: React.ReactNode;
};

const BotaoInterativo = ({ children }: BotaoInterativoProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const linkRef = useRef<HTMLAnchorElement>(null);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const container = containerRef.current;
        const link = linkRef.current;

        if (!container || !link) return;

        const retangulo = container.getBoundingClientRect();
        const posX = event.clientX - retangulo.left;
        const posY = event.clientY - retangulo.top;

        const centroX = retangulo.width / 2;
        const centroY = retangulo.height / 2;

        const deslocamentoX = (posX - centroX) / 8;
        const deslocamentoY = (posY - centroY) / 8;

        link.style.transform = `translate(${deslocamentoX}px, ${deslocamentoY}px)`;
    };

    const resetarPosicao = () => {
        const link = linkRef.current;
        if (!link) return;

        link.style.transform = 'translate(0, 0)';
    };

    return (
        <div
            className={styles.containerButton}
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetarPosicao}
        >
            <a href="#" ref={linkRef} className={styles.hoverMove}>
                {children}
            </a>
        </div>
    );
};

export default BotaoInterativo;
