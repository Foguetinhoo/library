// importando a função do loading de outro arquivo
import { listUser, loginUser } from "./functions/createuser.js"
import { loading } from "./functions/loading.js"
const data_inicio = document.querySelector('#data-inicio')
data_inicio.attributes.min = Date.now()
const data_fim = document.querySelector('#data-fim')
//pegando o nome do usuario do session e atribuindo ao html
const data = listUser()
const username = data.map(user=>user.name)
//criando a varíavel da imagem e atribuindo um source dinamico
const isLoading = sessionStorage.getItem('loading') || false
const user = document.querySelector('.user')
user.innerHTML = username
const imageUser =  document.querySelector("#user")
const srcDefault = "./src/assets/User_Icon.png"
imageUser.src =  imageUser.attributes.getNamedItem('src') || srcDefault
//se o loading for verdadeiro redireciona para o login
if(!isLoading) loading('login')

const logoutBtn = document.getElementById('logoutbtn');

  logoutBtn.addEventListener('click', (e) => {
    e.preventDefault(); // impede o link de mudar antes da limpeza
    sessionStorage.clear(); // apaga todos os dados salvos
    loading('login') // redireciona pro login
  });

