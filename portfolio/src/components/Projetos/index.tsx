import { Github } from "lucide-react";
import Slider from "../../Animations/Slider";
import sass from "./sass.module.scss";

function Projetos() {

  return (

    <>

      <div className={sass.container}>

        <div className={sass.containerProjetos}>

          <div className={sass.linha}>
            <p>Projetos</p>
          </div>

          <div className={sass.container}>

            <div className={sass.card}>
              <div className={sass.box}>
                <div className={sass.content}>
                  {/* <h2>02</h2> */}
                  <h3>SupersEsportivos</h3>
                  <p>Tecnoligias usadas:
                    React, TypeScript
                    <br />
                    MongoDB, Prisma
                    <br />
                    <br />
                  </p>
                  {/* <a href="#">Read More</a> */}
                  <div className={sass.containerIcons}>
                    <a href="https://supers-esportivos.vercel.app/" target="_blank">
                      <img src="/imagens/icons/browser.png" alt="" />
                    </a>

                    <a href="https://github.com/AndersonMeloo/SupersEsportivos" target='_blank'>
                      <Github size={30} className={sass.iconGit}/>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className={sass.card}>
              <div className={sass.box}>

                <div className={sass.content}>
                  <h2></h2>
                  <h3>Rede Solidaria</h3>
                  <p>Tecnoligias usadas:
                    React, TypeScript
                    <br />
                    PHP, mySQL
                    <br />
                    Em Andamento..
                  </p>
                  {/* <a href="#">Read More</a> */}

                  <div className={sass.containerIcons}>
                    <a href="https://rede-solidaria.vercel.app/" target="_blank">
                      <img src="/imagens/icons/browser.png" alt="" />
                    </a>

                    <a href="https://github.com/AndersonMeloo/RedeSolidaria" target='_blank'>
                      {/* <img src="/imagens/icons/github.png" alt="" /> */}
                      <Github size={30} className={sass.iconGit}/>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className={sass.card}>
              <div className={sass.box}>
                <div className={sass.content}>
                  {/* <h2>03</h2> */}
                  <h3>Em Breve</h3>
                  {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p> */}
                  {/* <a href="#">Read More</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Slider>
        <div className={sass.containerSliderProjetos}>
          <h1>Projetos</h1>
          <span>
            <Github size={32} />
          </span>
          <p>Desenvolvidos</p>
        </div>
      </Slider>
    </>
  );
}

export default Projetos;