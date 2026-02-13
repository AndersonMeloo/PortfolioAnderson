'use client';

import LogoLoop from '@/components/ui/LogoLoop';
import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiSass,
    SiPhp,
    SiMysql,
    SiNodedotjs,
    SiGit,
    SiTailwindcss,
    SiMongodb,
    SiPostgresql,
    SiDocker,
    SiNextdotjs,
    SiNestjs,
    SiPrisma
} from "react-icons/si";


const techLogos = [

    {
        node: (
            <div className="flex flex-col items-center gap-2 cursor-pointer p-2">
                <SiTypescript color="#3178C6" />
                <span className="text-sm text-white mt-3 font-mono">TypeScript</span>
            </div>
        ),
        title: "TypeScript",
    },
    {
        node: (
            <div className="flex flex-col items-center gap-2 cursor-pointer">
                <SiReact color="#61DAFB" />
                <span className="text-sm text-white mt-3 font-mono">React</span>
            </div>
        ),
        title: "React",
    },

    {
        node: (
            <div className="flex flex-col items-center gap-2 cursor-pointer">
                <SiNodedotjs color="#339933" />
                <span className="text-sm text-white mt-3 font-mono">Node.js</span>
            </div>
        ),
        title: "Node.js",
    },
    {
        node: (
            <div className="flex flex-col items-center gap-2 cursor-pointer">
                <SiGit color="#F05032" />
                <span className="text-sm text-white mt-3 font-mono">Git</span>
            </div>
        ),
        title: "Git",
    },
    {
        node: (
            <div className="flex flex-col items-center gap-2 cursor-pointer">
                <SiTailwindcss color="#38BDF8" />
                <span className="text-sm text-white mt-3 font-mono">Tailwind CSS</span>
            </div>
        ),
        title: "Tailwind CSS",
    },
    {
        node: (
            <div className="flex flex-col items-center gap-2 cursor-pointer">
                <SiMongodb color="#47A248" />
                <span className="text-sm text-white mt-3 font-mono">MongoDB</span>
            </div>
        ),
    },
    {
        node: (
            <div className="flex flex-col items-center gap-2 cursor-pointer">
                <SiPostgresql color="#4169E1" />
                <span className="text-sm text-white mt-3 font-mono">PostgreSQL</span>
            </div>
        ),
    },
    {
        node: (
            <div className="flex flex-col items-center gap-2 cursor-pointer">
                <SiDocker color="#2496ED" />
                <span className="text-sm text-white mt-3 font-mono">Docker</span>
            </div>
        ),
    },
    {
        node: (
            <div className="flex flex-col items-center gap-2 cursor-pointer">
                <SiNextdotjs color="#FFFFFF" />
                <span className="text-sm text-white mt-3 font-mono">Next.js</span>
            </div>
        ),
    },
    {
        node: (
            <div className="flex flex-col items-center gap-2 cursor-pointer">
                <SiNestjs color="#E0234E" />
                <span className="text-sm text-white mt-3 font-mono">Nest.js</span>
            </div>
        ),
    },
    {
        node: (
            <div className="flex flex-col items-center gap-2 cursor-pointer">
                <SiPrisma color="#2D3748" />
                <span className="text-sm text-white mt-3 font-mono">Prisma</span>
            </div>
        ),
    },
];

const imageLogos = [
    { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
    { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
    { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];


function Stacks() {

    return (

        <section
            className="h-screen "
            id="stacks">
            <div className="w-full mx-auto mb-20 h-full flex justify-center flex-col">

                <h1 className='text-white text-center text-4xl mb-4 font-montserrat'>Stack de Tecnologias</h1>

                <div
                    style={{ height: '200px', position: 'relative', overflow: 'hidden' }}
                >
                    <LogoLoop
                        logos={techLogos}
                        speed={80}
                        direction="left"
                        logoHeight={50}
                        gap={60}
                        hoverSpeed={0}
                        scaleOnHover
                        fadeOut
                        fadeOutColor="#ffffff"
                        ariaLabel="Technology partners"
                        className='mt-8 overflow-hidden'
                    />
                </div>
            </div>
        </section>
    );
}

export default Stacks;