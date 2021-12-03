import { filterDropDown } from "../../utils/utils";

function Controls({ abilities, selectedAbility, handleChange }){
    const filter = filterDropDown(abilities, selectedAbility)
    console.log('DROP', selectedAbility)
    return (
        <>
            <div>
                <h1>Filter By Ability:</h1>
                <select value={selectedAbility} onChange={(e) => handleChange(e.target.value)}>
                    <option value='all'>All</option>
                    {filter.map(category => (
                        <option key={category} value={category}>{category}</option>
                        ))}
                </select>
            </div>
            <div>
                <h1>Ability:</h1>
                <h1>{`${selectedAbility}`}</h1>
            </div>
            <div>
                <h1>Sort By Pokemon:</h1>
                <label>Ascending
                    <input type="radio" name="sort" value="ascending" />
                </label>
                <label>Descending
                    <input type="radio" name="sort" value="descending" />
                </label>
            </div>
        </>
    )
}
export default Controls;