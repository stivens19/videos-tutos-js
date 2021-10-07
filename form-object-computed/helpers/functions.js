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


export const templateUser=(user)=>(`
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">${user.nombres}</h5>
            <p class="card-text">${user.email}</p>
            <p class="card-text">${user.sexo}</p>
        </div>
    </div>
`)
