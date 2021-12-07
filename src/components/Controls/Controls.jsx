import './controls.css';

function Controls({ abilities, selectedAbility, handleChange, handleSort, sortPokemon }){
    return (
        <section className="controlsContainer">
            <div>
                <h1 className="controlLabel">Filter By Ability:</h1>
                <select value={selectedAbility} onChange={(e) => handleChange(e.target.value)}>
                    <option key="all" value='all'>All</option>
                    {abilities.map(category => (
                        <option key={category} value={category}>{category}</option>
                        ))}
                </select>
            </div>
            <div>
                <h1 className="controlLabel">Ability:</h1>
                <h1>{`${selectedAbility}`}</h1>
            </div>
            {selectedAbility !== 'all' &&
                <div className="sortPokemon">
                    <h1 className="controlLabel">Sort By Pokemon:</h1>
                    <input id="sort1" type="radio" name="sort" value="asc" onChange={(e) => handleSort(e.target.value)} checked={sortPokemon === "asc"}/>
                    <label className="label1" htmlFor="sort1">
                        Ascending
                    </label>
                    <input id="sort2" type="radio" name="sort" value="desc" onChange={(e) => handleSort(e.target.value)} checked={sortPokemon === "desc"}/>
                    <label htmlFor="sort2">
                        Descending
                    </label>
                </div>
            }
        </section>
    )
}
export default Controls;