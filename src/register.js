import { createUser } from "./functions/createuser.js";
import { createMessages } from "./functions/messages.js";
import { validLogin } from "./functions/validation.js";

const registerForm = document.querySelector(".registerForm");
const _name = document.getElementById("name");
const _email = document.getElementById("email");
const _password = document.getElementById("password");

registerForm.addEventListener("submit", (e) => {
  try {
    e.preventDefault();
    // recebendo os valores e tirando os espaços antes e depois
    const name = _name.value.trim();
    const email = _email.value.trim();
    const password = _password.value.trim();

    const response = validLogin(email, password, false)
    console.log(response)
    // passo para a função que é responsável por criar e redirecionar]
    createMessages(registerForm, response.message, response.type)
    if (response.type === 'success') {
      createUser(name, email, password)
      location.assign('login')
    }


  } catch (e) {
    createMessages(registerForm, e.message, 'warning')
  }

});
