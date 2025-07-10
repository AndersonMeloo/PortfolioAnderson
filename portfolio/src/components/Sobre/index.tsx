import { Github, MoveUpLeft } from 'lucide-react';
import sass from './sass.module.scss'
import '../../assets/sass/global.scss'
import Slider from '../Slider';

function Sobre() {

  return (

    <>
      <div className={sass.containerSobre}>

        <div className={sass.containerEmail}>
          <MoveUpLeft className={sass.icon} size={12} />
          <a href="mailto:andersonrodriguesmelo@hotmail.com">andersonrodriguesmelo@hotmail.com</a>
        </div>

        <div className={sass.container}>
          <p>Olá, Eu sou</p>
          <div className={sass.animation}>
            <div className={sass.first}><div className={sass.containerTextos}>Anderson Melo</div></div>
            <div className={sass.second}><div className={sass.containerTextos}>Developer Full-Stack</div></div>
            <div className={sass.third}><div className={sass.containerTextos}>Software Engineer</div></div>
          </div>
        </div>
      </div>

      <div className={sass.containerApresentacao}>
        
        <div className={sass.linha}>
          <p>Quem sou eu</p>
        </div>

        <div className={sass.container}>
          <div className={sass.containerTexto}>
            <p>Sou um profissional de TI com experiência em desenvolvimento web, dominando PHP, MySQL, JavaScript e
                NodeJS. Atualmente, estou me aprimorando em React e NextJS, com o objetivo de me tornar um desenvolvedor
                full stack.

                Além das habilidades técnicas, também estou focado no desenvolvimento de soft skills, como comunicação,
                colaboração e resolução de problemas, essenciais para atuar de forma eficaz em equipes e entregar
                soluções de alto impacto. Com uma mentalidade de aprendizado contínuo, busco sempre melhorar e
                contribuir para o sucesso dos projetos em que estou envolvido.</p>
          </div>

          <div className={sass.containerImagem}>
            <img src="../imagens/andersonMelo.webp" alt="Foto de Anderson Melo" />
          </div>
        </div>
      </div>

      <div className={sass.containerSobreMim}>
        <Slider>
          <div className={sass.containerTitle}>
            <p>Sobre
              <Github className={sass.icon} />
              Mim</p>
            <p>Anderson Melo</p>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Sobre;