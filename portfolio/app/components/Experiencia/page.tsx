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
                            {/* 
                            <p className="text-2xl md:text-2xl font-semibold leading-tight font-numbers">
                                Desenvolvedor Front-End<br />
                            </p> */}
                            <p className="text-2xl md:text-2xl font-semibold leading-tight font-numbers">
                                Supervisor Técnico de Desenvolvimento Front-End
                            </p>

                            <p className="text-[#575D69] text-xl md:text-2xl font-medium font-mono">
                                Yaslip
                            </p>
                        </div>

                        <div className="flex flex-col gap-8 text-left mb-10 font-montserrat max-w-3xl">
                            <div className="relative pl-6 md:pl-8 pb-4">
                                <div className="absolute -left-0.75 top-2 h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_0_6px_rgba(255,255,255,0.08)] animate-pulse" />

                                <h3 className="text-2xl md:text-3xl font-semibold text-white font-nunito transition-all duration-500 ease-in-out">
                                    Supervisor Técnico de Desenvolvimento Front-End
                                </h3>

                                <div className="mt-4 flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-sm text-[#9CA3AF] text-base md:text-[15px]">
                                    <p className="text-white/90 font-medium">Responsabilidades:</p>

                                    <ul className="space-y-3 list-disc pl-5 leading-relaxed">
                                        <li>Gestão e acompanhamento da equipe de desenvolvimento;</li>
                                        <li>Participação em reuniões com clientes para levantamento de requisitos, alinhamento de demandas e apresentação de soluções;</li>
                                        <li>Desenvolvimento e manutenção de aplicações utilizando Next.js, React, TypeScript, JavaScript e PHP;</li>
                                        <li>Criação e otimização de páginas de conversão com foco em performance, SEO e experiência do usuário;</li>
                                        <li>Análise de métricas e identificação de oportunidades de melhoria contínua;</li>
                                        <li>Implementação de técnicas avançadas de SEO técnico;</li>
                                        <li>Gerenciamento de infraestrutura web através do CyberPanel;</li>
                                        <li>Configuração e gerenciamento de DNS, domínios, certificados SSL e hospedagem;</li>
                                        <li>Configuração e suporte de serviços de e-mail corporativo, incluindo SMTP, autenticação e entregabilidade;</li>
                                        <li>Monitoramento de desempenho utilizando Google Analytics, Google Search Console, Lighthouse e PageSpeed Insights;</li>
                                        <li>Suporte técnico, mentoria e orientação para desenvolvedores da equipe.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="relative pl-6 md:pl-8 h-16">
                                <div className="absolute left-0 top-0 h-full w-px bg-white/20" />
                                <div className="absolute -left-0.75 top-0 h-3 w-3 rounded-full bg-white shadow-[0_0_0_8px_rgba(255,255,255,0.08)] animate-pulse" />
                            </div>

                            <div className="relative pl-6 md:pl-8 pt-1">
                                <div className="flex flex-col gap-5 text-[#9CA3AF] text-base md:text-[15px] leading-relaxed">
                                    <h3 className="text-2xl md:text-3xl font-semibold text-white font-nunito transition-all duration-500 ease-in-out">
                                        Desenvolvedor de front-end - Júnior
                                    </h3>
                                    <div className="text-[#cccccc] flex flex-col gap-4">
                                        <p>Atualmente, contribuo para a evolução tecnológica da empresa, auxiliando outros desenvolvedores na adoção do Next.js e colaborando com equipes de marketing e design. Prezo por um trabalho colaborativo, entregas com valor real e soluções acessíveis, seguindo padrões como WCAG para garantir produtos mais inclusivos e eficientes.</p>

                                        <p>Atuo como desenvolvedor com experiência em projetos de Front-End e Back-End, participando da criação e otimização de sites e aplicações web personalizadas. Trabalho com tecnologias como JavaScript, React, Next.js, PHP, HTML5, CSS3, SCSS, TailwindCSS e Bootstrap, sempre buscando soluções alinhadas às necessidades do negócio e dos usuários.</p>

                                        <p>Tenho forte foco em performance, SEO e qualidade de código, aplicando boas práticas que melhoram indicadores como Core Web Vitals, experiência do usuário e posicionamento nos motores de busca. Também realizo integrações com APIs, além do uso de ferramentas como Google Analytics e Search Console para análise e melhoria contínua dos projetos.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Experiencia;