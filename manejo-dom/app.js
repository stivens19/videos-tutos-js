import { useSelect } from './helper.js';

const {button,lista}=useSelect(['#button','.lista'])

button.addEventListener('click',()=>{
    lista.forEach(item => {
        item.classList.toggle('active')
    });
})




