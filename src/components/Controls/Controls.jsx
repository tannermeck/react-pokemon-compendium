import { filterDropDown } from "../../utils/utils";

function Controls({ abilities, selectedAbility, handleChange }){
    const filter = filterDropDown(abilities)
    return (
        <select value={selectedAbility} onChange={(e) => handleChange(e.target.value)}>
            {filter.map(category => (
                <option key={category} value={category}>{category}</option>
            ))}
        </select>
    )
}
export default Controls;