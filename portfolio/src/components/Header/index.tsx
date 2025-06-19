import { Circle, Copyright, MoonIcon, SunIcon } from 'lucide-react';
import sass from './sass.module.scss'
import { useEffect, useState } from 'react';

type MudarTema = 'dark' | 'light'

function Header() {

    const [theme, setTheme] = useState(() => {

        const storageTheme = localStorage.getItem('theme') as MudarTema || 'dark'
        return storageTheme
    })

    function handleClickTheme(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {

        event.preventDefault()
        setTheme(prevTheme => {

            prevTheme = prevTheme === 'dark' ? 'light' : 'dark'
            return prevTheme
        })
    }

    useEffect(() => {

        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    const nextThemeIcon = {
        dark: <MoonIcon size={22} />,
        light: <SunIcon size={22} />
    }

    return (

        <>
            <div className={sass.containerHeader}>

                <div className={sass.containerHome}>
                    <a href="#" className={sass.nomeMouse}>
                        <Copyright size={12} className={sass.iconHome} />
                        Anderson Melo
                    </a>
                </div>

                <span className={sass.mudarTema} onClick={handleClickTheme}>
                    {nextThemeIcon[theme]}
                </span>

                <div className={sass.containerLinks}>

                    <div className={sass.div1}>
                        <p>Status
                            <Circle size={8} className={sass.circleStatus} />
                        </p>
                        <p className='containerP'>Atualmente disponivel para contratação</p>
                    </div>

                    <div className={sass.div2}>
                        <div>
                            <p>Redes</p>
                        </div>
                        <div className={sass.linkGrid}>
                            <a href="">Linkedin</a>
                            <a href="">Email</a>
                            <a href="">Intagram</a>
                        </div>
                    </div>

                    <div className={sass.div3}>
                        <div>
                            <p>Navegar</p>
                        </div>
                        <div className={sass.linkGrid}>
                            <a href="">Projetos</a>
                            <a href="">Sobre</a>
                            <a href="">Contato</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;