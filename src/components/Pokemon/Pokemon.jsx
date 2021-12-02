import './pokemon.css';

function Pokemon({ pokemon }){
    return (
        <ul>
            {pokemon.map(character => (
                <div key={character._id} className="pokeContainer">
                    <li className="pokemonName">{character.pokemon}</li>
                    <img className="pokemonImage" alt={character.pokemon} src={character.url_image} />
                    <p className="pokemonType">{character.type_2 !== 'NA' ? `Type: ${character.type_1}/${character.type_2}` : `Type: ${character.type_1}`}</p>
                    <p className="pokemonType">{character.ability_2 !== 'NA' ? `Ability: ${character.ability_1}/${character.ability_2}` : `Ability: ${character.ability_1}`}</p>
                    <p className="pokemonType">Defense Level: {character.defense}</p>
                </div>
            ))}
        </ul>
    )
}
export default Pokemon;