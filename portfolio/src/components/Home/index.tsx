import { DotLottiePlayer } from '@dotlottie/react-player';
import sass from './sass.module.scss';
import BotaoInterativo from './MoverButton';
import Slider from '../../Animations/Slider';
import { Github } from 'lucide-react';
import '../../assets/sass/global.scss'

function Home() {

    return (
        <>
            <div className={sass.containerHome}>

                <div className={sass.containerApresentacao}>
                    <h2>Olá, meu nome é Anderson Melo.
                        <br />
                        <span className={sass.containerSpan}>Sou um </span><span>Desenvolvedor Full-Stack!</span>
                        <br />
                    </h2>
                </div>

                <div className={sass.containerAnimation}>

                    <div className={sass.containerButton}>
                        <BotaoInterativo>
                            <p>Entrar em Contato</p>
                            {/* <a href="https://api.whatsapp.com/send/?phone=11988730794&text&type=phone_number&app_absent=0" target='_blank'>
                                Entrar em Contato
                            </a> */}
                        </BotaoInterativo>
                    </div>

                    <div className={sass.container}>
                        <div className={sass.containerLottie}>
                            <DotLottiePlayer
                                src="https://lottie.host/13ccd450-129b-44fe-9df6-2b0e5a309d25/XzfIKx1I0Q.lottie"
                                loop
                                autoplay
                            />
                        </div>
                    </div>
                </div>
                <div className={sass.containerBorda}>
                    {/* <p>{`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`}</p> */}
                </div>
            </div>
            <div className={sass.containerLinha}></div>

            <Slider>
                <div className={sass.containerTitleSlide}>
                    <h2>Anderson Rodrigues de Melo
                        <span>
                            <Github size={40} className={sass.containerGitHub} />
                        </span>
                        Desenvolvedor Full Stack</h2>
                </div>
            </Slider>
        </>
    );
}

export default Home;
