import { Routes, Route } from 'react-router-dom';

import './assets/sass/global.scss';

// import { useEffect } from 'react';
// import './Animations/Star/star.scss';
// import { comecaCriandoEstrelas } from './Animations/Star/criaEstrelas';

import Header from './components/Header';
import Home from './components/Home';
import Projetos from './components/Projetos';
import Sobre from './components/Sobre';
import NotFound from './Pages/NotFound';

function App() {

  // useEffect(() => {
  //   comecaCriandoEstrelas();
  // }, []);

  return (
    <>
      {/* <div
        id="star-container"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      /> */}

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projetos" element={<Projetos />} />
        <Route path="/Sobre" element={<Sobre />} />
        <Route path="/NotFound" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
