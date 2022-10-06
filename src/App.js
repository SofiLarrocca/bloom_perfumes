import logo from './logo.svg';
import NavBar from './componentes/NavBar'
import ItemListContainer from './componentes/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetail from './componentes/ItemDetail';
import CartWidget from './componentes/CartWidget';
import { Cart } from './componentes/Cart';
import CustomProvider from './componentes/CartContext'


function App() {
  return (
    <div>
      <BrowserRouter>
       <CustomProvider> 
        <NavBar />
        <Routes> 
            <Route path='/' element = {<ItemListContainer greeting={'TODOS LOS PRODUCTOS'} />} />
            <Route path='/categoria/:categoria' element = {<ItemListContainer greeting={'TODOS LOS PRODUCTOS'} />} />
            <Route path='/detalle/:id' element = {<ItemDetailContainer />} />
            <Route path='/cart' element = {<Cart />} />
        </Routes>
       </CustomProvider>
      </BrowserRouter>  
    </div>
  );
}

export default App;
