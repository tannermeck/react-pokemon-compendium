import { useState, useEffect } from 'react';
import PokemonList from '../components/PokemonList/PokemonList';
import fetchPokemon from '../services/helper-functions';
import './compendium.css';

function Compendium(){
    const [loading, setLoading] = useState(true);
    const [pokemonList, setPokemonList] = useState([]);
    
    useEffect(() => {
        setLoading(true)
        async function getPokemon(){
        const pokemonArray = await fetchPokemon();
        setPokemonList(pokemonArray);
        setLoading(false)
        }
        getPokemon()
    }, [])
    return (
        <>
            {loading ? 
                <img id="pokeball" alt="pokeball" src='https://cdn.dribbble.com/users/621155/screenshots/2835314/simple_pokeball.gif'/> :
                <div>
                    <h1>Not Loading...</h1> 
                    <PokemonList pokemon={pokemonList}/>   
                </div>
            }
        </>
    )
}
export default Compendium