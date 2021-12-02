import './pokemon.css';

function Pokemon({ pokemon }){
    console.log(pokemon)
    return (
        <ul>
            {pokemon.map(character => (
                <div key={character._id} className="pokeContainer">
                    <li className="pokemonName">{character.pokemon}</li>
                    <img className="pokemonImage" alt={character.pokemon} src={character.url_image} />
                    <p className="pokemonType">{character.type_2 !== 'NA' ? `${character.type_1}/${character.type_2}` : `${character.type_1}`}</p>
                </div>
            ))}
        </ul>
    )
}
export default Pokemon;