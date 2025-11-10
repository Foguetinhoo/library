// importando a função do loading de outro arquivo
import { loading } from "./functions/loading.js"
//criando a varíavel da imagem e atribuindo um source dinamico
const isLoading = sessionStorage.getItem('loading') || false

const imageUser =  document.querySelector("#user")
const srcImage = "./src/assets/User_Icon.png"
imageUser.src =  imageUser.src ||  srcImage
//se o loading for verdadeiro redireciona para o login
if(!isLoading) loading('login')

const logoutBtn = document.getElementById('logoutbtn');

  logoutBtn.addEventListener('click', (e) => {
    e.preventDefault(); // impede o link de mudar antes da limpeza
    sessionStorage.clear(); // apaga todos os dados salvos
    window.location.href = 'login.html'; // redireciona pro login
  });

