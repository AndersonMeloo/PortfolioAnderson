import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

function Open() {

    return (

        <section id="open">
            <div className="h-screen w-full mb-10 flex items-center justify-center text-center">
                <div className="relative z-10 w-full flex justify-center">

                    <div className="
                w-[90%]
                sm:w-[80%]
                md:w-[60%]
                lg:w-[40%]
                rounded-xl
                p-10
                border border-white/10
              bg-white/2
                ">
                        <div className="flex items-center justify-center gap-3 flex-col">

                            <div className="flex items-center justify-center gap-2">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </span>
                                <p className="text-white text-[14px] font-mono">Status</p>
                            </div>

                            <span className="text-white text-2xl font-montserrat">
                                Engenheiro de Software
                            </span>

                            <p className="text-white font-nunito">Disponível para oportunidades • Aberto a novos projetos</p>

                            <Link
                                href='https://portfolio-anderson-nine.vercel.app/AndersonMelo.pdf'
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-2 text-white bg-black py-4 px-8 border border-white/30 rounded-4xl transition-all duration-200 ease-in-out hover:bg-white hover:text-black hover:scale-[1.03] mt-4"
                            >
                                <span className="transition-opacity duration-200 group-hover:opacity-0">
                                    ●
                                </span>
                                <span className="font-montserrat">Currículo</span>
                                <span className="
    opacity-0
    -translate-x-2
    transition-all duration-200
    group-hover:opacity-100
    group-hover:translate-x-0
  ">
                                    <FiArrowRight size={16} />
                                </span>

                            </Link>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
export default Open;