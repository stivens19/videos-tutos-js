const $=(q)=>document.querySelectorAll(q);

const transform=palabra=>{
    const re=/ /gi;

    const newpalabra=palabra.replace(re,"")
    return newpalabra.toLowerCase();
}

export const useSelect=(selectors=[])=>{
    let elements={};
    selectors.forEach(selector=>{
        if($(selector).length > 1){
            elements={
                ...elements,
                [transform(selector).slice(1)]:[...$(selector)]
            }
        }else if($(selector).length == 1){
            elements={
                ...elements,
                [$(selector)[0].name || $(selector)[0].id || transform(selector).slice(1)]:$(selector)[0]
            }
        }else{
            console.log(`Revise el selector ${selector} no existe en el DOM`)
        }
        
    })

    return elements;
}