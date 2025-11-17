import { Github } from "lucide-react";
import Slider from "../../Animations/Slider";
import sass from "./sass.module.scss";
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
// import { Card, CardContent } from "../ui/card";

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
                    MongoDB, Node.js
                    <br />
                    Prisma
                    <br />
                  </p>
                  {/* <a href="#">Read More</a> */}
                  <div className={sass.containerIcons}>
                    <a href="https://supers-esportivos.vercel.app/" target="_blank">
                      <img src="/imagens/icons/browser.png" alt="" />
                    </a>

                    <a href="https://github.com/AndersonMeloo/SupersEsportivos" target='_blank'>
                      <Github size={30} className={sass.iconGit} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className={sass.card}>
              <div className={sass.box}>
                <div className={sass.content}>
                  {/* <h2>03</h2> */}
                  <h3>FitScore</h3>
                  <p>
                    Tecnoligias usadas:
                    React, TypeScript
                    MongoDB, Node.js
                    <br />
                    Prisma
                    <br />
                  </p>

                  <div className={sass.containerIcons}>
                    <a href="https://fit-score-kappa.vercel.app/" target="_blank">
                      <img src="/imagens/icons/browser.png" alt="" />
                    </a>

                    <a href="https://github.com/AndersonMeloo/FitScore" target='_blank'>
                      {/* <img src="/imagens/icons/github.png" alt="" /> */}
                      <Github size={30} className={sass.iconGit} />
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
                      <Github size={30} className={sass.iconGit} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* SHADCN */}
            {/* <Carousel className="w-full max-w-sm">
              <CarouselContent className="-ml-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">

                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-30">
                          <span className="text-2xl font-semibold">{index + 1}</span>
                        </CardContent>
                        SupersEsportivos
                        Tecnoligias usadas: React, TypeScript
                        MongoDB, Node.js
                        Prisma
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel> */}

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