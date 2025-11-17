// importando a função do loading de outro arquivo
import { loading } from "./functions/loading.js"
import { StorageL } from "./functions/Storage.js"
//Declaração de variáveis e atribuição das mesmas
const data_inicio = document.querySelector('#data-inicio')
const data_fim = document.querySelector('#data-fim')
const imageUser =  document.querySelector("#user")
const logoutBtn = document.getElementById('logoutbtn');
const user = document.querySelector('.user')
const isLogged = new StorageL('session').getItem('user_logged')|| null
//verifica se ha usuário logado
if(!isLogged)loading('login') 
// Atribuo o nome do usuario ao html
const [{name}] = isLogged

//pegando o nome do usuario do session e atribuindo ao html
user.innerHTML = name || 'Convidado'
//criando a varíavel da imagem e atribuindo um source dinamico
const srcDefault = "./src/assets/User_Icon.png"
imageUser.src =  imageUser.attributes.getNamedItem('src') || srcDefault
//se o loading for verdadeiro redireciona para o login

  logoutBtn.addEventListener('click', (e) => {
    e.preventDefault(); // impede o link de mudar antes da limpeza
    sessionStorage.clear(); // apaga todos os dados salvos
    loading('login') // redireciona pro login
  });

