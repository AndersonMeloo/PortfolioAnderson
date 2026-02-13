function Experiencia() {

    return (

        <>
            <section id="experiencia">
                <div className="w-full h-screen flex flex-col items-center justify-center gap-6 text-center text-white">
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl transition-all duration-500 ease-in-out font-bold font-nunito">Minha Experiência Profissional</h1>
                    <p className="tracking-wide font-montserrat">Jornada profissional em desenvolvimento web e soluções inovadoras</p>
                </div>

                <div className="w-full flex justify-start md:justify-center px-6 sm:px-8 md:px-8 xl:px-0">

                    <div className="w-full max-w-6xl flex flex-col md:flex-row gap-10 md:gap-10 text-white">

                        <div className="flex flex-col gap-3 w-full md:w-70 text-left">
                            <h2 className="text-3xl md:text-4xl font-semibold font-mono">
                                Fev 2025 – Atual
                            </h2>

                            <p className="text-2xl md:text-2xl font-semibold leading-tight font-numbers">
                                Desenvolvedor Front-End<br />
                            </p>

                            <p className="text-[#575D69] text-xl md:text-2xl font-medium font-mono">
                                Yaslip
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 text-[#9CA3AF] text-base md:text-[15px] max-w-3xl text-left mb-10 font-montserrat">
                            <p>Atualmente, contribuo para a evolução tecnológica da empresa, auxiliando outros desenvolvedores na adoção do Next.js e colaborando com equipes de marketing e design. Prezo por um trabalho colaborativo, entregas com valor real e soluções acessíveis, seguindo padrões como WCAG para garantir produtos mais inclusivos e eficientes.</p>

                            <p>Atuo como desenvolvedor com experiência em projetos de Front-End e Back-End, participando da criação e otimização de sites e aplicações web personalizadas. Trabalho com tecnologias como JavaScript, React, Next.js, PHP, HTML5, CSS3, SCSS, TailwindCSS e Bootstrap, sempre buscando soluções alinhadas às necessidades do negócio e dos usuários.</p>

                            <p>Tenho forte foco em performance, SEO e qualidade de código, aplicando boas práticas que melhoram indicadores como Core Web Vitals, experiência do usuário e posicionamento nos motores de busca. Também realizo integrações com APIs, além do uso de ferramentas como Google Analytics e Search Console para análise e melhoria contínua dos projetos.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Experiencia;