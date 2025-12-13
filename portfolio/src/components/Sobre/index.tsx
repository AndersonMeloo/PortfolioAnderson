import { Github, MoveUpLeft } from 'lucide-react';
import sass from './sass.module.scss'
import '../../assets/sass/global.scss'
import Slider from '../../Animations/Slider';
// import { useState } from 'react';
// import TextType from '../../Animations/TextType/TextType';

function Sobre() {

  //   const [activeSkill, setActiveSkill] = useState<'react' | 'typescript' | 'mysql' | 'php' | 'javascript' | null>(null)

  //   const skillTexts = {

  //     react: {
  //       title: 'React',
  //       description:
  //         'Biblioteca JavaScript para construir interfaces de usuário interativas e reutilizáveis, baseada em componentes.',
  //     },

  //     typescript: {
  //       title: 'TypeScript',
  //       description:
  //         'Superset do JavaScript que adiciona tipagem estática, facilitando a detecção de erros e aumentando a robustez do código.',
  //     },

  //     mysql: {
  //       title: 'MySQL',
  //       description:
  //         'Sistema de gerenciamento de banco de dados relacional muito utilizado para armazenar e consultar dados de aplicações.',
  //     },

  //     php: {
  //       title: 'PHP',
  //       description:
  //         'Linguagem de script server-side usada para desenvolvimento web dinâmico e construção de sites e APIs.',
  //     },

  //     javascript: {
  //       title: 'JavaScript',
  //       description:
  //         'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem'
  //     }
  //   }

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

            <br /><br />
            <p>Eniac: Cursando
              <br />
              Software Enginner</p>
          </div>

          <div className={sass.containerImagem}>
            <img src="./imagens/andersonMelo.webp" alt="Foto Anderson Melo" />
          </div>
        </div>
      </div>

      <div className={sass.containerSkills}>

        <div className={sass.linha}>
          <p>Habilidades</p>
        </div>

        <div className={sass.containerPrincipal}>


          <div className={sass.containerTexts}>

            <div className={sass.container}>

              <h2>Desenvolvimento Front-End</h2>

              <p>React</p>
              <p>Next</p>
              <p>TypeScript</p>
              <p>JavaScript</p>
              <p>Consumo de APIs REST</p>
              <p>Tailwind CSS</p>
              <p>Shadcn</p>
              <p>Styled Components</p>
              <p>Sass</p>

            </div>

            <div className={sass.containerOne}>

              <h2>Desenvolvimento Back-End</h2>

              <p>NodeJS</p>
              <p>Express/Fastify</p>
              <p>Zod</p>
              <p>PHP</p>
              <p>MySQL</p>
              <p>MongoDB</p>
              <p>PostgreSQL</p>
              <p>JWT</p>
              <p>ORM</p>
              <p>Prisma</p>
              <p>Nest.js</p>
            </div>
          </div>

          <div className={sass.containerTextsOne}>

            <div className={sass.container}>
              <h2>Lógica e Estrutura de Dados</h2>

              <p>Estruturas (listas, pilhas, árvores)</p>
              <p>Algoritmos otimizados</p>
              <p>Resolução de problemas</p>
              <p>Organização e legibilidade do código</p>
            </div>

            <div className={sass.containerOne}>
              <h2>Colaboração e Produto</h2>

              <p>Foco em entregas com valor real</p>
              <p>Documentação e Git</p>
              <p>Metodologias Ágeis (Scrum)</p>
              <p>Integração com Design e Marketing</p>

              <h2>Arquitetura e Boas Práticas</h2>
              <p>System Design:
                <br />
                (Planejamento e Estrutura de Sistemas)
              </p>
              <p>Design System:
                <br />
                (Componentes Reutilizáveis)
              </p>
              <p>Containerização e Deploy:
                <br />
                Docker</p>
            </div>

          </div>
        </div>

      </div>

      {/* <div className={sass.containerSofts}>
        <div className={sass.container}>

          <div className={sass.containerSoftsTexts}>

            <h2>&lt;/ Softs Skills</h2>
            <h3>Linguagens e Frameworks</h3>
          </div> */}

      {/* <div className={sass.softsImgs}>

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

            <div className={sass.imgJavaScript}
              onMouseEnter={() => setActiveSkill('javascript')}
              onMouseLeave={() => setActiveSkill(null)}
            ></div>
          </div> */}

      {/* <div className={sass.softsText}>

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

            <TextType
              text={[
                { content: "Veja mais:", link: "/projetos", target: "_self" },
                { content: "Meus Projetos", link: "/projetos", target: "_self" }
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </div> */}

      {/* </div>
      </div> */}

      <div className={sass.containerSofts}>

        <div className={sass.linha}>
          <p>Ferramentas</p>
        </div>

        <div className={sass.containerSoftsSkills}>

          <div className={sass.skills}>
            <p>JavaScript</p>
            <div className={sass.circle}></div>
            <p>TypeScript</p>
            <div className={sass.circle}></div>
            <p>React</p>
            <div className={sass.circle}></div>
            <p>Sass</p>
            <div className={sass.circle}></div>
          </div>

          <div className={sass.skillsOne}>
            <p>PHP</p>
            <div className={sass.circle}></div>
            <p>mySQL</p>
            <div className={sass.circle}></div>
            <p>NodeJS</p>
            <div className={sass.circle}></div>
            <p>Git</p>
            <div className={sass.circle}></div>
          </div>

          <div className={sass.skillsTree}>
            <p>Tailwind</p>
            <div className={sass.circle}></div>
            <p>MongoDB</p>
            <div className={sass.circle}></div>
            <p>PostgreSQL</p>
            <div className={sass.circle}></div>
          </div>

          <div className={sass.skillsTree}><p>Docker</p>
            <div className={sass.circle}></div>
            <p>Next.js</p>
            <div className={sass.circle}></div>
            <p>Nest.js</p>
          </div>

          {/* <div className={sass.projects}>

            <div className={sass.teste}>
              <TextType
                text={[
                  { content: "Veja mais:", link: "/projetos", target: "_self" },
                  { content: "Meus Projetos", link: "/projetos", target: "_self" }
                ]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
              />
            </div>
          </div> */}

        </div>
      </div>

      <div className={sass.containerSobreMim}>
        <Slider>
          <div className={sass.containerTitle}>
            <p>Sobre
              Mim</p>
            <Github size={40} className={sass.icon} />
            <p>Anderson Melo</p>

            <p className={sass.removeText}>12</p>
            <p className={sass.removeText}>12</p>

          </div>
        </Slider>
      </div>
    </>
  );
}

export default Sobre;