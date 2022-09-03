import logo from './logo.svg';
import NavBar from './componentes/NavBar'
import ItemListContainer from './componentes/ItemListContainer'
import usuario from './index'


function App() {
  return (
    <div>
      <header className="App-header">
        <NavBar />
      </header>
      <ItemListContainer name = {usuario} />
    </div>
  );
}

export default App;
