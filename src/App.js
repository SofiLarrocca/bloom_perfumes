import logo from './logo.svg';
import NavBar from './componentes/NavBar'
import ItemListContainer from './componentes/ItemListContainer'
import Contador from './componentes/ItemCount'


function App() {
  return (
    <div>
      <header className="App-header">
        <NavBar />
      </header>
      <ItemListContainer name = {'Producto Seleccionado'} />
      <Contador stock = {6}/>
    </div>
  );
}

export default App;
