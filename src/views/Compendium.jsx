import { useState } from 'react';
import './compendium.css';

function Compendium(){
    const [loading, setLoading] = useState(false)
    // if (loading)
    return (
        <>
            {loading ? 
                <img id="pokeball" alt="pokeball" src='https://cdn.dribbble.com/users/621155/screenshots/2835314/simple_pokeball.gif'/> 
                : <h1>Not Loading...</h1>   
            }
        </>
    )
}
export default Compendium