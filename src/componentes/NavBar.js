import logo from '../logo.jpg';
import '../App.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Navbar() {

    const categorias = [
      {id:0, genero: 'Mujer', ruta: '/categorias/mujer'},
      {id:1, genero: 'Hombre', ruta: '/categorias/hombre'}
    ]


    return (
      <div className="App">
        <header className="App-header">
        <nav className="App-nav">
            <img src={logo} className="App-logo" alt="logo" />
          <div>
            {categorias.map ((categorias) => { 
             return <a key={categorias.id} className="App-link" href='#'>{categorias.genero}</a>
            })}
            <CartWidget/>
          </div>
        </nav>
        </header>
      </div>

    );
  };

  
export default Navbar;