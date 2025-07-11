import sass from './sass.module.scss'

function TextAnimation() {

    return (

        <>
            <h1>System
                <span className={sass.white}>.
                    <span className={sass.out}>out</span>
                    .</span>
                <span className={sass.println}>println</span>
                ("</h1>
            <div className={sass.string}>
                <h1 className={`${sass.greeting} ${sass.en}`}>Olá Mundo!</h1>
                <h1 className={`${sass.greeting} ${sass.es}`}>Hello Print!</h1>
                <h1 className={`${sass.greeting} ${sass.de}`}>Bem Vindo!</h1>
                <h1 className={`${sass.greeting} ${sass.it}`}>Good Morning!</h1>
            </div>
            <h1 className={sass.closure}>");</h1>
        </>
    )
}

export default TextAnimation
