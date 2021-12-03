import { useState, useEffect } from 'react';
import Controls from '../components/Controls/Controls';
import PokemonList from '../components/PokemonList/PokemonList';
import { fetchPokemon, fetchByAbility, fetchAllAbilities } from '../services/helper-functions';
import './compendium.css';

function Compendium(){
    const [loading, setLoading] = useState(true);
    const [pokemonList, setPokemonList] = useState([]);
    const [selectedAbility, setSelectedAbility] = useState('all')
    const [abilityArray, setAbilityArray] = useState([])
    const [sortPokemon, setSortPokemon] = useState('')
    
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
                const filteredPokemon = selectedAbility !== 'all' ? await fetchByAbility(selectedAbility, sortPokemon) : await fetchPokemon();;
                setPokemonList(filteredPokemon);
                // setSortPokemon(prevState => `${prevState}`);
                setLoading(false);
        }
        getAbility();
    }, [selectedAbility, sortPokemon])
    return (
        <>
            {loading ? 
                <img id="pokeball" alt="pokeball" src='https://cdn.dribbble.com/users/621155/screenshots/2835314/simple_pokeball.gif'/> :
                <div>
                    <Controls abilities={abilityArray} selectedAbility={selectedAbility} handleChange={setSelectedAbility} handleSort={setSortPokemon} sortPokemon={sortPokemon}/>
                    <PokemonList pokemon={pokemonList}/>   
                </div>
            }
        </>
    )
}
export default Compendium