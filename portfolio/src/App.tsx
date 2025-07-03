import { Route, Routes, Outlet } from 'react-router-dom'

import './assets/sass/global.scss'

import Header from './components/Header'
import Home from './components/Home'
import Projetos from './components/Projetos'
import Sobre from './components/Sobre'
import NoutFound from './Pages/NotFound'

function Layout() {

  return (

    <>
      <Header />
      <Outlet />
    </>
  )
}

function App() {

  return (


    <Routes>

      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='Projetos' element={<Projetos />} />
        <Route path='Sobre' element={<Sobre />} />
        <Route path='NotFound' element={<NoutFound />} />
      </Route>

    </Routes>

  )
}

export default App
