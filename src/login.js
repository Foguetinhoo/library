// import {listUser} from "./functions/createuser.js";
import { loading } from "./functions/loading.js";
import { isLogged } from "./functions/islogged.js";
import { createMessages } from "./functions/messages.js";
import { validData } from "./functions/validation.js";
import { StorageL } from "./functions/Storage.js";
const logged= new StorageL('session').getItem('user_logged')|| null
// os elementos HTML são atribuidos á variaveis
const _email = document.getElementById("email");
const _password = document.getElementById("password");
const loginForm = document.querySelector('.loginForm')
let isHidden =  true
// verifica se o loading é false e retorna para 
if(logged) loading('home')

// --- LOGIN ---
  loginForm.addEventListener("submit", (e) => {
    try{
      e.preventDefault();
  
      //pego cada valor e extraio sem espaço no inicio e no fim
      const email = _email.value.trim();
      const password = _password.value.trim();
      const response = validData(email,password)
      
      createMessages(loginForm,response?.message,response?.type)
      console.log(response)
      if (response.type == 'success') {
           isLogged(email)
          setTimeout(() =>loading('home'),2500)
      }
  

    }catch(e){
      console.log(e.message)
      createMessages(loginForm,'Erro ao logar','warning')
    }

  });
