import logo from './logo.svg';
import NavBar from './componentes/NavBar'
import ItemListContainer from './componentes/ItemListContainer'



function App() {
  return (
    <div>
      <header className="App-header">
        <NavBar />
      </header>
      <ItemListContainer />
    </div>
  );
}

export default App;
