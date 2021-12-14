// Pokedex
// Is provided, via props, an array of objects describing different pokemon, and renders a sequence of Pokecard components.

import Pokecard from './Pokecard';
import './Pokedex.css';

const Pokedex = ({ pokemons }) => (
    <div className='Pokedex'>
        <h1>Pokedex</h1>
        {pokemons.map(pokemon => (
            <Pokecard id = {pokemon.id} name = {pokemon.name} type = {pokemon.typpe} base_experience = {pokemon.base_experience} />
        ))}

    </div>
)

export default Pokedex;

