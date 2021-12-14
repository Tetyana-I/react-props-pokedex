// Pokecard
// Shows a single Pokemon, with their name, image, and type.

import './Pokecard.css';

const Pokecard = ({id, name, type, base_experience }) => {
    const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    
    return <div className="Pokecard">
        <h2 className="Pokecard-header">{name}</h2>
        <img className="Pokecard-img" src={imgSrc} alt=""></img>
        <p className='Pokecard-type'>Type: {type}</p>
        <p className='Pokecard-type'>EXP: {base_experience}</p>
    </div> 
}

export default Pokecard;