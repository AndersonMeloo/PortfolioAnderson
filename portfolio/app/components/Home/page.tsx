import Experiencia from "../Experiencia/page";
import Open from "../Open/page";
import Projetos from "../Projetos/page";
import Sobre from "../Sobre/page";
import Stacks from "../Stacks/page";

function Home() {

    return (

        <>
            <Sobre />
            <Stacks />
            <Open />
            <Projetos />
            <Experiencia />
        </>
    );
}

export default Home;