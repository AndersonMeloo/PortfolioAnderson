import { MoveUpLeft } from 'lucide-react';
import sass from './sass.module.scss'

function Sobre() {

  return (

    <>
      <div className={sass.containerSobre}>

        <div className={sass.containerEmail}>
          <MoveUpLeft className={sass.icon} size={12} />
          <a href="mailto:andersonrodriguesmelo@hotmail.com">andersonrodriguesmelo@hotmail.com</a>
        </div>

        {/* <div className={sass.containerContactESobre}></div> */}

      </div>
    </>
  );
}

export default Sobre;