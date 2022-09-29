import logo from '../logo.jpg';
import '../css/App.css';
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {

    const categorias = [
      {id:0, genero: 'Mujer', ruta: '/categoria/mujer'},
      {id:1, genero: 'Hombre', ruta: '/categoria/hombre'},
      {id:2, genero: 'Niños', ruta: '/categoria/niños'}
    ]


    return (
      <div className="App">
        <header className="App-header">
        <nav className="App-nav">
           <Link to = '/' ><img src={logo} className="App-logo" alt="logo" /></Link> 
          <div>
            {categorias.map ((categorias) => { 
             return <NavLink key={categorias.id} className="App-link" to={categorias.ruta}>{categorias.genero}</NavLink>
            })}
            <Link to= '/cart'><CartWidget/></Link> 
          </div>
        </nav>
        </header>
      </div>

    );
  };

  
export default Navbar;