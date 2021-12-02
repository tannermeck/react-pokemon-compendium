import './pokemon.css';

function Pokemon({ pokemon }){
    console.log(pokemon)
    return (
        <ul>
            {pokemon.map(character => (
                <div>
                    <li key={character.pokemon}>{character.pokemon}</li>
                    <img className="pokemonImage" alt={character.pokemon} src={character.url_image} />
                </div>
            ))}
        </ul>
    )
}
export default Pokemon;