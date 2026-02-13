'use client'

import Link from "next/link";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";

function Projetos() {

    const [openProject, setOpenProject] = useState<number | null>(null);

    return (

        <section id="projetos">
            <div className="w-full flex items-center justify-center flex-col text-white">

                <div className="flex items-center justify-center flex-col gap-6 m-10 mb-20 lg:m-20">
                    <h1 className="font-mono text-6xl xl:text-8xl">Projetos</h1>
                    <p className="tracking-wide font-montserrat">
                        Uma coleção de trabalhos que demonstra paixão por código limpo,
                        design intuitivo e soluções inovadoras.
                    </p>
                </div>

                {/* ================= PROJETO 01 ================= */}
                <div className="w-[80%] flex flex-col gap-4">

                    <div className="flex items-center gap-6">
                        <h2 className="text-8xl font-numbers">01</h2>
                        <div className="flex-1 h-px bg-white/30"></div>
                    </div>

                    <p className="text-6xl mt-2 font-bold font-nunito">E-commerce</p>

                    <div className="w-full flex flex-row gap-6 items-center mt-10 max-[1110px]:flex-col">

                         <div className="w-[60%] max-[1110px]:w-full">
                            <Image
                                src="/E-commerce.png"
                                alt="Imagem E-commerce"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full h-auto rounded-3xl"
                                quality={100}
                            />
                        </div>

                        <div className="h-100 w-[30%] max-[1110px]:w-full">

                            {openProject !== 1 ? (
                                <>
                                    <h2 className="text-[20px] tracking-wider mb-4 font-mono">Tecnologias</h2>

                                    <div className="flex gap-2 ml-2 text-[11px] flex-wrap tracking-wider font-mono">
                                        {[
                                            "React.js",
                                            "JWT",
                                            "TypeScript",
                                            "Node.js",
                                            "Prisma ORM",
                                            "MongoDB",
                                            "Scss",
                                        ].map((tech) => (
                                            <p
                                                key={tech}
                                                className="border border-white/40 rounded-full py-1.5 px-3 font-bold bg-neutral-500/30"
                                            >
                                                {tech}
                                            </p>
                                        ))}
                                    </div>

                                    <div className="mt-6 flex flex-col gap-3 w-full">
                                        <p className="font-bold font-nunito">Links</p>

                                        <Link
                                            href="https://github.com/AndersonMeloo/Ecommerce"
                                            target="_blank"
                                            className="flex items-center justify-center gap-3 py-2 border rounded-lg text-white font-bold hover:scale-[1.02] font-roboto"
                                        >
                                            <SiGithub size={20} />
                                            Code
                                        </Link>

                                        <Link
                                            href=""
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setOpenProject(1);
                                            }}
                                            className="flex items-center justify-center gap-3 py-2 border rounded-lg bg-white text-black hover:scale-[1.02] font-montserrat"
                                        >
                                            Ver detalhes
                                            <FiArrowRight size={12} />
                                        </Link>
                                    </div>
                                </>
                            ) : (
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-xl font-bold font-montserrat">Sobre o projeto</h3>

                                    <p className="text-white/80 text-[13px] leading-relaxed font-montserrat">
                                        Este projeto simula um fluxo real de compra, desde a navegação pelos produtos até o gerenciamento do carrinho e das informações do usuário, representando um cenário próximo ao de um e-commerce real.
                                    </p>

                                    <p className="text-white/80 text-sm leading-relaxed text-[13px] font-montserrat">
                                        O usuário pode explorar produtos, adicionar ou remover itens do carrinho e acompanhar o valor total da compra de forma dinâmica.
                                    </p>

                                    <p className="text-white/80 text-sm leading-relaxed text-[13px] font-montserrat">
                                        A aplicação possui autenticação e áreas protegidas, permitindo acesso ao histórico de compras e dados pessoais apenas para usuários logados.
                                    </p>


                                    <button
                                        onClick={() => setOpenProject(null)}
                                        className="mt-4 py-2 border rounded-lg bg-white text-black hover:scale-[1.02] flex items-center justify-center gap-2 font-montserrat font-medium"
                                    >
                                        <FiArrowLeft size={16} />
                                        Voltar
                                    </button>
                                </div>
                            )}

                        </div>
                    </div>
                </div>

                {/* ================= PROJETO 02 ================= */}
                <div className="w-[80%] flex flex-col gap-4 mt-40">

                    <div className="flex items-center gap-6">
                        <h2 className="text-8xl font-bold font-numbers">02</h2>
                        <div className="flex-1 h-px bg-white/30"></div>
                    </div>

                    <p className="text-6xl mt-2 font-bold font-nunito">Supers Esportivos</p>

                    <div className="w-full flex flex-row gap-6 items-center mt-10 max-[1110px]:flex-col">

                        <div className="w-[60%] max-[1110px]:w-full">
                            <Image
                                src="/SupersEsportivos.png"
                                alt="Imagem Supers Esportivos"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full h-auto rounded-3xl"
                                quality={100}
                            />
                        </div>

                        <div className="h-100 w-[30%] max-[1110px]:w-full">

                            {openProject !== 2 ? (
                                <>
                                    <h2 className="text-[20px] tracking-wider mb-4 font-mono">Tecnologias</h2>

                                    <div className="flex gap-2 ml-2 text-[11px] flex-wrap tracking-wider font-mono">
                                        {["React.js", "TypeScript", "Node.js", "Prisma", "MongoDB", "Scss"].map((tech) => (
                                            <p key={tech} className="border border-white/40 rounded-full py-1.5 px-3 font-bold bg-neutral-500/30">
                                                {tech}
                                            </p>
                                        ))}
                                    </div>

                                    <div className="mt-6 flex flex-col gap-3 w-full">
                                        <p className="font-bold font-nunito">Links</p>

                                        <Link
                                            href="https://supers-esportivos.vercel.app/"
                                            target="_blank"
                                            className="flex items-center justify-center gap-3 py-2 border rounded-lg bg-white text-black hover:scale-[1.02] font-montserrat"
                                        >
                                            View Project
                                            <FiArrowRight size={12} />
                                        </Link>

                                        <Link
                                            href="https://github.com/AndersonMeloo/SupersEsportivos"
                                            target="_blank"
                                            className="flex items-center justify-center gap-3 py-2 border rounded-lg text-white font-bold hover:scale-[1.02] font-roboto"
                                        >
                                            <SiGithub size={20} />
                                            Code
                                        </Link>

                                        <Link
                                            href=""
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setOpenProject(2);
                                            }}
                                            className="flex items-center justify-center gap-3 py-2 border rounded-lg bg-white text-black hover:scale-[1.02] font-montserrat"
                                        >
                                            Ver detalhes
                                            <FiArrowRight size={12} />
                                        </Link>
                                    </div>
                                </>
                            ) : (
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-xl font-bold font-montserrat">Sobre o projeto</h3>

                                    <p className="text-white/80 text-sm leading-relaxed text-[13px] font-montserrat">
                                        Este projeto consiste em um catálogo de carros superesportivos, onde é possível cadastrar veículos com imagem e informações detalhadas, simulando um sistema real de gerenciamento de anúncios.
                                    </p>

                                    <p className="text-white/80 text-sm leading-relaxed text-[13px] font-montserrat">
                                        O usuário pode adicionar novos carros, visualizar todos os registros cadastrados e remover itens, mantendo o controle completo sobre os dados exibidos na aplicação.
                                    </p>

                                    <p className="text-white/80 text-sm leading-relaxed text-[13px] font-montserrat">
                                        A proposta do projeto é reproduzir um cenário próximo ao de plataformas automotivas reais, com foco em organização, clareza das informações e facilidade de uso.
                                    </p>


                                    <button
                                        onClick={() => setOpenProject(null)}
                                        className="mt-4 py-2 border rounded-lg bg-white text-black hover:scale-[1.02] flex items-center justify-center gap-2 font-montserrat font-medium"
                                    >
                                        <FiArrowLeft size={16} />
                                        Voltar
                                    </button>
                                </div>
                            )}

                        </div>
                    </div>
                </div>

                {/* ================= PROJETO 03 ================= */}
                <div className="w-[80%] flex flex-col gap-4 mt-40">

                    <div className="flex items-center gap-6">
                        <h2 className="text-8xl font-bold font-numbers">03</h2>
                        <div className="flex-1 h-px bg-white/30"></div>
                    </div>

                    <p className="text-6xl mt-2 font-bold font-nunito">Clima Tempo</p>

                    <div className="w-full flex flex-row gap-6 items-center mt-10 max-[1110px]:flex-col">

                        <div className="w-[60%] max-[1110px]:w-full">
                            <Image
                                src="/ClimaTempo.png"
                                alt="Imagem Clima Tempo"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full h-auto rounded-3xl"
                                quality={100}
                            />
                        </div>


                        <div className="h-100 w-[30%] max-[1110px]:w-full">

                            {openProject !== 3 ? (
                                <>
                                    <h2 className="text-[20px] tracking-wider mb-4 font-mono">Tecnologias</h2>

                                    <div className="flex gap-2 ml-2 text-[11px] flex-wrap tracking-wider font-mono">
                                        {["Next.js", "TypeScript", "Node.js", "Tailwind", "Docker", "Python", "JWT"].map((tech) => (
                                            <p key={tech} className="border border-white/40 rounded-full py-1.5 px-3 font-bold bg-neutral-500/30">
                                                {tech}
                                            </p>
                                        ))}
                                    </div>

                                    <div className="mt-6 flex flex-col gap-3 w-full">
                                        <p className="font-bold font-nunito">Links</p>

                                        <Link
                                            href="https://github.com/AndersonMeloo/OpenMeteo"
                                            target="_blank"
                                            className="flex items-center justify-center gap-3 py-2 border rounded-lg text-white font-bold hover:scale-[1.02] font-roboto"
                                        >
                                            <SiGithub size={20} />
                                            Code
                                        </Link>

                                        <Link
                                            href=""
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setOpenProject(3);
                                            }}
                                            className="flex items-center justify-center gap-3 py-2 border rounded-lg bg-white text-black hover:scale-[1.02] font-montserrat"
                                        >
                                            Ver detalhes
                                            <FiArrowRight size={12} />
                                        </Link>
                                    </div>
                                </>
                            ) : (
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-xl font-bold font-montserrat">Sobre o projeto</h3>

                                    <p className="text-white/80 text-sm leading-relaxed text-[13px] font-montserrat">
                                        Este projeto permite consultar condições climáticas em tempo real de forma simples e intuitiva, a partir da busca por cidades.
                                    </p>

                                    <p className="text-white/80 text-sm leading-relaxed text-[13px] font-montserrat">
                                        O usuário pode visualizar informações como temperatura atual, velocidade e direção do vento, além do horário local, tudo apresentado de forma clara e organizada.
                                    </p>

                                    <p className="text-white/80 text-sm leading-relaxed text-[13px] font-montserrat">
                                        A aplicação foi pensada para oferecer respostas rápidas e uma experiência fluida, simulando o funcionamento de plataformas reais de previsão do tempo.
                                    </p>


                                    <button
                                        onClick={() => setOpenProject(null)}
                                        className="mt-4 py-2 border rounded-lg bg-white text-black hover:scale-[1.02] flex items-center justify-center gap-2 font-montserrat font-medium"
                                    >
                                        <FiArrowLeft size={16} />
                                        Voltar
                                    </button>
                                </div>
                            )}

                        </div>
                    </div>
                </div>


                <div className="flex justify-center mt-40">
                    <MdKeyboardArrowDown
                        size={30}
                        className="text-2xl animate-bounce animation-duration opacity-70"
                    />
                </div>
                <Link
                    href="https://github.com/AndersonMeloo"
                    target="_blank"
                    className="relative block w-full text-center m-4 text-[18px] tracking-wide text-[#575D69]
                before:content-[''] before:absolute before:-top-4 before:left-1/2 before:-translate-x-1/2 before:w-14 before:h-px before:bg-[#575D69]/40
                after:content-[''] after:absolute after:top-[calc(100%+40px)] after:left-1/2 after:-translate-x-1/2 after:w-px after:h-10 after:bg-[#575D69]/40"
                >
                    Ver mais Projetos
                </Link>

            </div>
        </section>
    );
}

export default Projetos;
