import { filterDropDown } from "../../utils/utils";
import './controls.css';

function Controls({ abilities, selectedAbility, handleChange, handleSort, sortPokemon }){
    const filter = filterDropDown(abilities, selectedAbility)
    console.log('DROP', sortPokemon)
    return (
        <>
            <div>
                <h1>Filter By Ability:</h1>
                <select value={selectedAbility} onChange={(e) => handleChange(e.target.value)}>
                    <option key="all" value='all'>All</option>
                    {filter.map(category => (
                        <option key={category} value={category}>{category}</option>
                        ))}
                </select>
            </div>
            <div>
                <h1>Ability:</h1>
                <h1>{`${selectedAbility}`}</h1>
            </div>
            {selectedAbility !== 'all' &&
                <div className="sortPokemon">
                    <h1>Sort By Pokemon:</h1>
                    <label htmlFor="sort">Ascending
                        <input type="radio" name="sort" value="asc" onChange={(e) => handleSort(e.target.value)} checked={sortPokemon === "asc"}/>
                    </label>
                    <label htmlFor="sort">Descending
                        <input type="radio" name="sort" value="desc" onChange={(e) => handleSort(e.target.value)} checked={sortPokemon === "desc"}/>
                    </label>
                </div>
            }
        </>
    )
}
export default Controls;