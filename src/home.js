// importando a função do loading de outro arquivo
import { loginUser, verifyUser } from "./functions/createuser.js"
import { loading } from "./functions/loading.js"

const {name} = verifyUser()
//criando a varíavel da imagem e atribuindo um source dinamico
const isLoading = sessionStorage.getItem('loading') || false
const user = document.querySelector('.user')
user.innerHTML = name || 'Gilliard'
const imageUser =  document.querySelector("#user")
const srcDefault = "./src/assets/User_Icon.png"
imageUser.src =  imageUser.src || srcDefault
//se o loading for verdadeiro redireciona para o login
if(!isLoading) loading('login')

const logoutBtn = document.getElementById('logoutbtn');

  logoutBtn.addEventListener('click', (e) => {
    e.preventDefault(); // impede o link de mudar antes da limpeza
    sessionStorage.clear(); // apaga todos os dados salvos
    window.location.href = 'login.html'; // redireciona pro login
  });

