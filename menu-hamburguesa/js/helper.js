const $=q=>document.querySelector(q);

export const useSelect=(ids=[])=>{
    let elements={};

    ids.forEach(id=>{
        elements={
            ...elements,
            [$(id).name || $(id).id]:$(id)
        }
    })
    return elements;
}