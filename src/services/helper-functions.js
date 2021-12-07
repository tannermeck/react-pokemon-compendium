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
    const filterAbilities = data
        .map((ability) => ability.ability)
        .sort(() => 0.5 - Math.random())
        .slice(0, 10);
    return filterAbilities;
}

export async function fetchByAbility(selectedAbility, sortPokemon){
    let url = `https://pokedex-alchemy.herokuapp.com/api/pokedex?sort=pokemon&direction=${sortPokemon}&ability=${selectedAbility}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.results;
}