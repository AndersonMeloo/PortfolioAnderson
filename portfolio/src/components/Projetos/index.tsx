import sass from "./sass.module.scss";

function Projetos() {

  return (

    <>
      <div className={sass.containerProjetos}>
        <div className={sass.container}>
          <div className={sass.card}>
            <div className={sass.box}>

              <div className={sass.content}>
                <h2></h2>
                <h3>Rede Solidaria</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
                {/* <a href="#">Read More</a> */}

                <div className={sass.containerIcons}>
                  <a href="">
                    <img src="imagens/icons/browser.png" alt="" />
                  </a>

                  <a href="">
                    <img src="imagens/icons/github.png" alt="" />
                  </a>
                </div>

              </div>
            </div>
          </div>

          <div className={sass.card}>
            <div className={sass.box}>
              <div className={sass.content}>
                {/* <h2>02</h2> */}
                <h3>Em breve</h3>
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p> */}
                {/* <a href="#">Read More</a> */}
              </div>
            </div>
          </div>

          <div className={sass.card}>
            <div className={sass.box}>
              <div className={sass.content}>
                {/* <h2>03</h2> */}
                <h3>Em breve</h3>
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p> */}
                {/* <a href="#">Read More</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projetos;