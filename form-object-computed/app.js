import { templateUser, useSelect } from './helpers/functions.js';

const {sexo,nombres,email,usuario,formulario}=useSelect(['#sexo','#nombres','#email','#usuario','#formulario']);

email.addEventListener('change',handleInputChange);
nombres.addEventListener('change',handleInputChange);
sexo.addEventListener('change',handleInputChange);
formulario.addEventListener('submit',handleSubmit)
let formValues={};
function handleInputChange(e) {
    formValues={
        ...formValues,
        [e.target.name]:e.target.value
    }
   
}

function handleSubmit(e) {
    e.preventDefault();
    usuario.innerHTML=templateUser(formValues);
    formValues={};
    email.value=''
    nombres.value=''
    sexo.value=''
}