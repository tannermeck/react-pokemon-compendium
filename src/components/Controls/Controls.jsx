import { filterDropDown } from "../../utils/utils";

function Controls({ abilities, selectedAbility, handleChange }){
    const filter = filterDropDown(abilities)
    console.log('DROP', selectedAbility)
    return (
        <>
            <div>
                <h1>Ability:</h1>
                <h1>{`${selectedAbility}`}</h1>
            </div>
            <div>
                <h1>Select an Ability:</h1>
                <select value={selectedAbility} onChange={(e) => handleChange(e)}>
                    <option value='all'>All</option>
                    {filter.map(category => (
                        <option key={category} value={category}>{category}</option>
                        ))}
                </select>
            </div>
        </>
    )
}
export default Controls;