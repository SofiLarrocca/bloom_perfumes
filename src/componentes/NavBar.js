import logo from '../logo.jpg';
import '../App.css';
import CartWidget from './CartWidget';

function Navbar() {
    return (
      <div className="App">
        <nav className="App-nav">
          <img src={logo} className="App-logo" alt="logo" />
  
          <div>
            <a className="App-link" href="https://reactjs.org" target="_blank">Productos</a>
            <a className="App-link" href="https://reactjs.org" target="_blank">Ingresar</a>
            <a className="App-link" href="https://reactjs.org" target="_blank">Comprar</a>
            <CartWidget/>
          </div>
        </nav>
        <div className='linea'></div>
           
      </div>
    );
  };

  
export default Navbar;