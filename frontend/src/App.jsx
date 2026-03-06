// BrowserRouter activa el sistema de rutas en toda la app
// Routes  contenedor de todas las rutas
// Route define qué componente mostrar según la URL
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import del header y el css global de la app
import Header from './components/Header/Header'
import './index.css'
// import del footer
import Footer from './components/Footer/Footer'
//import de la página Home
import Home from './pages/Home/Home'


const App = () => {
  return (
    //BrowserRouter envuelve TODA la app para que el sistema de rutas funcione en cualquier parte
    <BrowserRouter>
      {/*no podemos entregar Header y main sueltos por ende se necesita un contenedor*/}
      <div className="app-wrapper">

        {/* header siempre visible*/}
        <Header />

        {/* Routes decide qué página mostrar según la URL actual */}
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>

        {/* footer siempre visible */}
        <Footer />

      </div>
    </BrowserRouter>
  )
}

export default App
