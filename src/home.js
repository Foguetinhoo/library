// importando a função do loading de outro arquivo
import { loading } from "./functions/loading.js"
import { StorageL } from "./functions/Storage.js"
//verifica se ha usuário logado
const isLogged = new StorageL('session').getItem('user_logged') || null
if (!isLogged) loading('login')
//Declaração de variáveis e atribuição das mesmas
const data_inicio = document.querySelector('#data-inicio')

const data_fim = document.querySelector('#data-fim')
const imageUser = document.querySelector("#user")
const logoutBtn = document.getElementById('logoutbtn');
const user = document.querySelector('.user')
const add = document.getElementById('add-book')

// Desestruturando  o nome do usuario ao html
const [{ name }] = isLogged
user.innerHTML = name || 'Convidado'

//criando a varíavel da imagem e atribuindo um source dinamico
const srcDefault = "./src/assets/User_Icon.png"
imageUser.src = imageUser.attributes.getNamedItem('src') || srcDefault

add.addEventListener('click',  e =>{


})
logoutBtn.addEventListener('click', (e) => {
  e.preventDefault(); // impede o link de mudar antes da limpeza
  // apaga todos os dados salvos
  new StorageL('session').clearItem()
  loading('login') // redireciona pro login
});

