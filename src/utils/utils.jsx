export function filterDropDown(abilities, selectedAbility){
    //need each item in array to be unique
    console.log('abilities', abilities)
    let arr = [...abilities]
    // if (selectedAbility !== 'all') {
    //     arr.push(selectedAbility)
        // for (let i = 0; i < 10; i++){
        //     let random = Math.floor(Math.random() * 188)
        //     arr.push(abilities[random])
        // }
    // } 
    // else if (selectedAbility === 'all') {
    //     for (let i = 0; i < 10; i++){
    //         let random = Math.floor(Math.random() * 188)
    //         arr.push(abilities[random])
    //     }
    // }
    return arr;
}