export async function fetchPokemon(){
    let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
    const res = await fetch(url);
    const data = await res.json();
    return data.results;
}

export async function fetchAllAbilities(){
    let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex/abilities';
    const res = await fetch(url);
    const data = await res.json();
    return data.map(ability => (
        ability.ability
    ))
}

export async function fetchByAbility(selectedAbility){
    let url = `https://pokedex-alchemy.herokuapp.com/api/pokedex?ability=${selectedAbility}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.results;
}
// https://pokedex-alchemy.herokuapp.com/api/pokedex?sort=pokemon&direction=asc&ability=soundproof

// export { fetchPokemon, fetchAllAbilities, fetchByAbility };