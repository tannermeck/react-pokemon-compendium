export function filterDropDown(abilities){
    let arr = []
    for (let i = 0; i < 10; i++){
        let random = Math.floor(Math.random() * 188)
        arr.push(abilities[random])
    }
    return arr;
}