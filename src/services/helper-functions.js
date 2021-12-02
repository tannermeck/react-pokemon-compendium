async function fetchPokemon(){
    let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
    const res = await fetch(url);
    const data = await res.json();
    return data.results;
}
export default fetchPokemon;