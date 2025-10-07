import { Circle, Copyright, MoonIcon, SunIcon } from 'lucide-react';
import sass from './sass.module.scss'
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import '../../assets/sass/global.scss'
import initCustomCursor from '../../utils/customCursor';

type AvailableTheme = 'dark' | 'light'

function Header() {
    const [theme, setTheme] = useState(() => {
        const storageTheme = localStorage.getItem('theme') as AvailableTheme || 'dark'
        return storageTheme
    })

    const [menuOpen, setMenuOpen] = useState(false)

    function handleClickTheme(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault()
        setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'))
    }

    function toggleMenu() {
        setMenuOpen(prev => !prev)
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    const nextThemeIcon = {
        dark: <MoonIcon size={22} />,
        light: <SunIcon size={22} />
    }

    useEffect(() => {
        initCustomCursor(); // inicializa o cursor quando o header for montado
    }, []);

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

                    {/* Botão hamburguer - escondido acima de 880px */}
                    <button
                        id="navTrigger"
                        className={`${sass.navTrigger} ${menuOpen ? sass.active : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <svg viewBox="0 0 64 48">
                            <path d="M19,15 L45,15 C70,15 58,-2 49.0177126,7 L19,37"></path>
                            <path d="M19,24 L45,24 C61.2371586,24 57,49 41,33 L32,24"></path>
                            <path d="M45,33 L19,33 C-8,33 6,-2 22,14 L45,37"></path>
                        </svg>
                    </button>

                    {/* Menu hamburguer */}
                    <nav
                        id="navMenu"
                        className={`${sass.navMenu} ${menuOpen ? sass.active : ''}`}
                        onClick={() => setMenuOpen(false)} // fecha menu ao clicar em algum link
                    >
                        <ul>
                            <li className={sass.navLinks}>Navegar</li>
                            <li><Link to='/Sobre'>Sobre</Link></li>
                            <li><Link to='/Projetos'>Projetos</Link></li>
                            <li><Link to='/'>Home</Link></li>'

                            <li className={sass.navLinks}>Redes Sociais</li>
                            <li><a href="https://www.linkedin.com/in/andersonrodriguesmelo/" target='_blank' rel="noreferrer">Linkedin</a></li>
                            <li><a href="https://github.com/AndersonMeloo" target='_blank' rel="noreferrer">GitHub</a></li>

                            <li className={sass.navLinks}>Contatos</li>
                            <li><a href="https://api.whatsapp.com/send/?phone=11988730794&BemVindo-DisponivelParaContratações" target='_blank' rel="noreferrer">Whatsapp</a></li>
                            <li><a href='mailto:andersonrodriguesmelo@hotmail.com'>Email</a></li>
                            <li><a href="/AndersonRodriguesMelo.pdf" target="_blank">Currículo</a></li>
                        </ul>
                    </nav>

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
                                <a href="https://www.linkedin.com/in/anderson-melo-68010120a/" target='_blank' rel="noreferrer">Linkedin</a>
                                <a href='mailto:andersonrodriguesmelo@hotmail.com'>Email</a>
                                <a href="https://github.com/AndersonMeloo" target='_blank' rel="noreferrer">GitHub</a>
                            </div>
                        </div>

                        <div className={sass.div3}>
                            <div>
                                <p>Navegar</p>
                            </div>
                            <div className={sass.linkGrid}>
                                <Link to='/Projetos'>Projetos</Link>
                                <Link to='/Sobre'>Sobre</Link>
                                <a href="https://api.whatsapp.com/send/?phone=11988730794&BemVindo-DisponivelParaContratações" target='_blank' rel="noreferrer">Contato</a>
                                <a href="/AndersonRodriguesMelo.pdf" target='_blank'>Currículo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
