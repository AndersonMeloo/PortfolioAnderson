import sass from './sass.module.scss'

type SliderProps = {

    duration?: number,
    children: React.ReactNode,
}

function Slider({ children, duration = 25 }: SliderProps) {

    return (

        <>
            <div className={sass.containerSlider}>
                <div className={sass.slide} style={{ animationDuration: `${duration}s` }}>
                    {children}
                </div>
            </div >
        </>
    );
}

export default Slider;