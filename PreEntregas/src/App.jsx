import './App.css'
import Navbar from './components/navbar'
import Logotipo from "../public/logoNav.png"
import Cart from "../src/assets/CartWidget.svg"
import Titulo from './components/saludo'



function App () {

return(
    <>
    <nav className="navbar">
      <div className="navbar"></div>
      <img src={Logotipo} className="logo" alt="Logo"/>
      <div className="botonesCarrito"><img src={Cart} className="carrito"alt="Carrito" />
      <h2><span>0</span></h2></div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="">Nosotros</a></li>
        <li><a href="">Servicios</a></li>
        <li><a href="">Contacto</a></li>
      </ul>
    </nav>
    <Navbar/>
    <div className="saludo">
    <Titulo texto="Bienvenidos a la mi web de ecommerce"/>
    </div>
    </>
  );
}

export default App