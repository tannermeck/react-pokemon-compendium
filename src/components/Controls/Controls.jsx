import { filterDropDown } from "../../utils/utils";

function Controls({ abilities }){
    const filter = filterDropDown(abilities)
    console.log(filter);
    return (
        <select>
            {filter.map(category => (
                <option value={category}>{category}</option>
            ))}
        </select>
    )
}
export default Controls;