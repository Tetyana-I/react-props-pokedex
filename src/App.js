import Pokedex from './Pokedex';
import './App.css';
import pokemons from './pokemons';

function App() {
  return (
    <div className="App">
      <Pokedex pokemons = {pokemons}/>
    </div>
  );
}

export default App;