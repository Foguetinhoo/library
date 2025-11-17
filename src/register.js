import { createUser} from "./functions/createuser.js";
import { createMessages } from "./functions/messages.js";
import { validData } from "./functions/validation.js";

const registerForm = document.querySelector(".registerForm");
const _name = document.getElementById("name");
const _email = document.getElementById("email");
const _password = document.getElementById("password");

registerForm.addEventListener("submit", (event) => {
  try {
    // Previne que o formulário tenha o comportamento padrão
    event.preventDefault();
    // recebendo os valores e tirando os espaços antes e depois
    const name = _name.value.trim();
    const email = _email.value.trim();
    const password = _password.value.trim();

    const  response = validData(email,password,false)
  
    if (response.type == 'success') {
        createUser(name,email,password)
        setTimeout(() => location.assign('login.html'),2500)
       
    }

  createMessages(registerForm,response?.message,response?.type)
    // passo para a função que é responsável por criar e redirecionar]
   
  } catch (e) {
    console.log(e)
    createMessages(registerForm, 'Erro ao registrar', 'warning')
  }

});

