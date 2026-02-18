import TextType from "@/components/ui/TextType";
import Link from "next/link";
import { MdEmail, MdKeyboardArrowDown } from "react-icons/md";
import { SiGithub, SiLinkedin } from "react-icons/si";

function Sobre() {

    return (

        <>
            <div className="w-full h-screen flex items-center justify-center flex-col text-white mt-10">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl transition-all duration-500 ease-in-out font-bold font-montserrat">Anderson Melo</h1>

                <TextType
                    className="font-bold text-xl mt-4 font-nunito"
                    text={["Engenheiro de Software", "Arquiteto de Código", "Solucionador de Problemas"]}
                    typingSpeed={90}
                    pauseDuration={2500}
                    showCursor={true}
                    cursorCharacter="|"
                />

                <p className="mt-6 text-center text-white/70 font-nunito">Transformando ideias em código desde 2023</p>


                <div
                    className="text-white mt-10 flex gap-6"
                >
                    <Link
                        href="https://www.linkedin.com/in/andersonrodriguesmelo/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 flex items-center justify-center rounded-full border border-white/40 text-white hover:border-white hover:scale-110 transition-all"
                    >
                        <SiLinkedin size={22} />
                    </Link>

                    <Link
                        href="https://github.com/AndersonMeloo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 flex items-center justify-center rounded-full border border-white/40 text-white hover:border-white hover:scale-110 transition-all"
                    >
                        <SiGithub size={22} />
                    </Link>

                    <Link
                        href={'mailto:andersonrodriguesmelo@hotmail.com'}
                        target="_blank"
                        className="w-14 h-14 flex items-center justify-center rounded-full border border-white/40 text-white hover:border-white hover:scale-110 transition-all"
                    >
                        <MdEmail size={22} />
                    </Link>
                </div>

                <div className="flex justify-center mt-40">
                    <MdKeyboardArrowDown
                        size={30}
                        className="text-2xl animate-bounce animation-duration opacity-70"
                    />
                </div>
            </div>

            <section id="sobre">
                <section className="w-full min-h-screen flex items-center justify-center pt-1 pb-20 text-white mb-20">
                    <div className="w-[90%] max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-12">

                        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 h-fit">
                            <h2 className="text-2xl font-semibold mb-6 font-numbers">
                                Sobre mim
                            </h2>

                            <p className="text-white/70 leading-relaxed text-[13px] font-mono">
                                Atuo como desenvolvedor com experiência em projetos de Front-End e Back-End.
                                Tenho trabalhado em soluções completas, com foco em qualidade de código,
                                entregas com valor real e boa colaboração com equipes multidisciplinares.
                            </p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6">
                            <h3 className="text-lg font-semibold mb-4 font-numbers">
                                Desenvolvimento Front-End
                            </h3>

                            <div className="grid grid-cols-2 gap-1 text-sm text-white/80 text-[13px] font-mono">
                                <span>React</span>
                                <span>Next</span>
                                <span>TypeScript</span>
                                <span>JavaScript</span>
                                <span>APIs REST</span>
                                <span>Tailwind CSS</span>
                                <span>Shadcn</span>
                                <span>Styled Components</span>
                                <span>Sass</span>
                                <span>Consumo de APIs</span>
                            </div>
                        </div>

                        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6">
                            <h3 className="text-lg font-semibold mb-4 font-numbers">
                                Desenvolvimento Back-End
                            </h3>

                            <div className="grid grid-cols-2 gap-1 text-sm text-white/80 text-[13px] font-mono">
                                <span>NodeJS</span>
                                <span>Express / Fastify</span>
                                <span>NestJS</span>
                                <span>PHP</span>
                                <span>Zod</span>
                                <span>JWT</span>
                                <span>Prisma</span>
                                <span>TypeORM</span>
                                <span>MySQL</span>
                                <span>PostgreSQL</span>
                                <span>MongoDB</span>
                                <span>ORM</span>
                            </div>
                        </div>

                        <div className="lg:col-span-2 bg-white/5 backdrop-blur-md rounded-2xl p-6">
                            <h3 className="text-lg font-semibold mb-4 font-numbers">
                                Lógica e Estrutura de Dados
                            </h3>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-1 text-sm text-white/80 text-[13px] font-mono">
                                <span>Estruturas de Dados</span>
                                <span>Listas, Pilhas e Árvores</span>
                                <span>Algoritmos Otimizados</span>
                                <span>Resolução de Problemas</span>
                                <span>Organização de Código</span>
                                <span>Legibilidade</span>
                            </div>
                        </div>

                        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6">
                            <h3 className="text-lg font-semibold mb-4 font-mono">
                                Colaboração e Produto
                            </h3>

                            <div className="grid grid-cols-2 gap-1 text-sm text-white/80 text-[13px] font-mono">
                                <span>Documentação e Git</span>
                                <span>Scrum</span>
                                <span>Entrega de Valor</span>
                                <span>Integração com Design</span>
                                <span>Integração com Marketing</span>
                            </div>
                        </div>

                        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6">
                            <h3 className="text-lg font-semibold mb-4 font-numbers">
                                Arquitetura e Boas Práticas
                            </h3>

                            <div className="grid grid-cols-2 gap-3 text-sm text-white/80 text-[13px] font-mono">
                                <span>System Design</span>
                                <span>Design System</span>
                                <span>Componentes Reutilizáveis</span>
                                <span>Docker</span>
                                <span>Deploy e Containerização</span>
                            </div>
                        </div>

                    </div>
                </section>
            </section>
        </>
    );
}

export default Sobre;