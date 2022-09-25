import logo from './logo.svg';
import NavBar from './componentes/NavBar'
import ItemListContainer from './componentes/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetail from './componentes/ItemDetail';
import Home from './componentes/Home';



function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes> 
            <Route path='/' element = {<Home />} />
            <Route path='/:categoria' element = {<ItemListContainer />} />
            <Route path='detail/:id' element = {<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
