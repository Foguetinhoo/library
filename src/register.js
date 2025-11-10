import { createUser } from "./functions/createuser.js";

const registerForm = document.querySelector(".registerForm");
const _name = document.getElementById("name");
const _email = document.getElementById("email");
const _password = document.getElementById("password");

registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // recebendo os valores e tirando os espaços antes e depois
    const name = _name.value.trim();
    const email = _email.value.trim();
    const password = _password.value.trim();
    // passo para a função que é responsável por criar e redirecionar
    createUser(name,email,password)
  
  });
