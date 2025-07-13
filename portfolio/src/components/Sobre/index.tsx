import { Github, MoveUpLeft } from 'lucide-react';
import sass from './sass.module.scss'
import '../../assets/sass/global.scss'
import Slider from '../../Animations/Slider';
import { useState } from 'react';

function Sobre() {

  const [activeSkill, setActiveSkill] = useState<'react' | 'typescript' | 'mysql' | 'php' | null>(null)

  const skillTexts = {

    react: {
      title: 'React',
      description:
        'Biblioteca JavaScript para construir interfaces de usuário interativas e reutilizáveis, baseada em componentes.',
    },

    typescript: {
      title: 'TypeScript',
      description:
        'Superset do JavaScript que adiciona tipagem estática, facilitando a detecção de erros e aumentando a robustez do código.',
    },

    mysql: {
      title: 'MySQL',
      description:
        'Sistema de gerenciamento de banco de dados relacional muito utilizado para armazenar e consultar dados de aplicações.',
    },

    php: {
      title: 'PHP',
      description:
        'Linguagem de script server-side usada para desenvolvimento web dinâmico e construção de sites e APIs.',
    }
  }

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
          </div>

          <div className={sass.softsImgs}>

            <div className={sass.imgReact}
              onMouseEnter={() => setActiveSkill('react')}
              onMouseLeave={() => setActiveSkill(null)}
            ></div>

            <div className={sass.imgTypeScript}
              onMouseEnter={() => setActiveSkill('typescript')}
              onMouseLeave={() => setActiveSkill(null)}
            ></div>

            <div className={sass.imgMySQL}
              onMouseEnter={() => setActiveSkill('typescript')}
              onMouseLeave={() => setActiveSkill(null)}
            ></div>

            <div className={sass.imgPhp}
              onMouseEnter={() => setActiveSkill('php')}
              onMouseLeave={() => setActiveSkill(null)}
            ></div>
          </div>


          <div className={sass.softsText}>
            {activeSkill ? (
              <>
                <h1>{skillTexts[activeSkill].title}</h1>
                <p>{skillTexts[activeSkill].description}</p>
              </>
            ) : (
              <>
                <h1>Passe o cursor na imagem</h1>
                <p>O texto da skill aparecerá aqui</p>
              </>
            )}
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