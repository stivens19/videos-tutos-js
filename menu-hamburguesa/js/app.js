import { useSelect } from './helper.js';

document.addEventListener('DOMContentLoaded', () => {
    const {logo,hamburger,menu}=useSelect(['#logo','#hamburger','#menu'])
    logo.textContent='<SE />'

    hamburger.addEventListener('click',()=>{
        menu.classList.toggle('open')
    })
})