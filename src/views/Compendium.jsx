import { useState, useEffect } from 'react';
import Controls from '../components/Controls/Controls';
import PokemonList from '../components/PokemonList/PokemonList';
import { fetchPokemon, fetchByAbility, fetchAllAbilities } from '../services/helper-functions';
import './compendium.css';

function Compendium(){
    const [loading, setLoading] = useState(true);
    const [pokemonList, setPokemonList] = useState([]);
    const [selectedAbility, setSelectedAbility] = useState('')
    const [abilityArray, setAbilityArray] = useState([])
    
    useEffect(() => {
        setLoading(true)
        async function getPokemon(){
            const pokemonArray = await fetchPokemon();
            setPokemonList(pokemonArray);
            setLoading(false);
        }
        getPokemon();
    }, [])

    useEffect(() => {
        async function getAllAbilities(){
            const abilityArray = await fetchAllAbilities();
            setAbilityArray(abilityArray);
        }
        getAllAbilities();
    }, [])

    useEffect(() => {
        async function getAbility(){
            if (!selectedAbility) return;
            setLoading(true)
            const filteredPokemon = await fetchByAbility(selectedAbility);
            setPokemonList(filteredPokemon);
            setLoading(false);
            // setSelectedAbility('')
        }
        getAbility();
    }, [selectedAbility])

    return (
        <>
            {loading ? 
                <img id="pokeball" alt="pokeball" src='https://cdn.dribbble.com/users/621155/screenshots/2835314/simple_pokeball.gif'/> :
                <div>
                    <Controls abilities={abilityArray} selectedAbility={selectedAbility} handleChange={setSelectedAbility}/>
                    <PokemonList pokemon={pokemonList}/>   
                </div>
            }
        </>
    )
}
export default Compendium