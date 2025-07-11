import { Github, MoveUpLeft } from 'lucide-react';
import sass from './sass.module.scss'
import '../../assets/sass/global.scss'
import Slider from '../Slider';
import TextAnimation from '../Animations/TextAnimation/TextAnimation';

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

      <div className={sass.containerSofts}>
        <div className={sass.container}>

          <div className={sass.containerSoftsTexts}>

            <h2>&lt;/ Softs Skills</h2>
            <h3>Linguagens e Frameworks</h3>
            <p>Passe o cursor ou clique na imagem</p>
          </div>

          <div className={sass.softsImgs}>

            <div className={sass.imgReact}></div>
            <div className={sass.imgTypeScript}></div>
            <div className={sass.imgMySQL}></div>
            <div className={sass.imgPhp}></div>
          </div>

           <TextAnimation />

          <div className={sass.softsText}>
            <h1>React</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem qui atque nisi, ullam officiis eos saepe nihil labore eveniet ipsam temporibus aliquam voluptates sequi unde provident debitis. Suscipit, dolorum in.</p>
          </div>

        </div>
      </div>

      <div className={sass.containerSobreMim}>
        <Slider>
          <div className={sass.containerTitle}>
            <p>Sobre
              Mim</p>
            <Github className={sass.icon} />
            <p>Anderson Melo</p>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Sobre;