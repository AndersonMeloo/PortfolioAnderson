import { Circle, Copyright, MoonIcon, SunIcon } from 'lucide-react';
import sass from './sass.module.scss'
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import '../../assets/sass/global.scss'

type AvailableTheme = 'dark' | 'light'

function Header() {

    const [theme, setTheme] = useState(() => {

        const storageTheme = localStorage.getItem('theme') as AvailableTheme || 'dark'
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

                <div className={sass.container}>

                    <div className={sass.containerHome}>
                        <Link to='/' className={sass.animatedLink}>

                            <span className={sass.textWrapper}>
                                <span className={`${sass.text} ${sass.textTop}`}>
                                    <Copyright size={12} className={sass.iconHome} />
                                    <Link to='/'> Anderson Melo</Link>
                                </span>
                                <span className={`${sass.text} ${sass.textBottom}`}>
                                    <Copyright size={12} className={sass.iconHome} />
                                    <Link to='/'> Anderson Melo</Link>
                                </span>
                            </span>
                        </Link>
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
                                <p>Redes Sociais</p>
                            </div>
                            <div className={sass.linkGrid}>
                                <a href="https://www.linkedin.com/in/anderson-melo-68010120a/" target='_blank'>Linkedin</a>
                                <a href='mailto:andersonrodriguesmelo@hotmail.com'>Email</a>
                                <a href="https://github.com/AndersonMeloo" target='_blank'>GitHub</a>
                            </div>
                        </div>

                        <div className={sass.div3}>
                            <div>
                                <p>Navegar</p>
                            </div>
                            <div className={sass.linkGrid}>
                                <Link to='/Projetos'>Projetos</Link>
                                <Link to='/Sobre'>Sobre</Link>
                                <a href="https://api.whatsapp.com/send/?phone=11988730794&BemVindo-DisponivelParaContratações" target='_blank'>Contato</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;