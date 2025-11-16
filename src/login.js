import { createUser, loginUser } from "./functions/createuser.js";
import { loading } from "./functions/loading.js";
import { createMessages } from "./functions/messages.js";
import { validData } from "./functions/validation.js";
let isLoading = sessionStorage.getItem('loading') || true
// os elementos HTML são atribuidos á variaveis
const _email = document.getElementById("email");
const _password = document.getElementById("password");
const loginForm = document.querySelector('.loginForm')
let isHidden =  true
// verifica se o loading é false e retorna para 
if(!isLoading) loading('home')

// --- LOGIN ---
  loginForm.addEventListener("submit", (e) => {
    try{
      e.preventDefault();
  
      //pego cada valor e extraio sem espaço no inicio e no fim
      const email = _email.value.trim();
      const password = _password.value.trim();
      const response = validData(email,password)

      console.log(response)
      if (response.type == 'success') {
          setTimeout(() => location.assign('home.html'),2500)
      }
  
      createMessages(loginForm,response?.message,response?.type)

    }catch(e){
      console.log(e.message)
      createMessages(loginForm,'Erro ao logar','warning')
    }

  });
