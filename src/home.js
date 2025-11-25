// importando a funções de outros arquivos
import { books } from "./functions/books.js"
import { changePerfil } from "./functions/changeperfil.js"
import { J } from "./functions/JClass.js"
import { atrib, listbooks } from "./functions/listbooks.js"
import { loading } from "./functions/loading.js"
import { createMessages } from "./functions/messages.js"
import { observ } from "./functions/observer.js"
import { StorageL } from "./functions/Storage.js"

//verifica se ha usuário logado
const isLogged = new StorageL('session').getItem('user_logged') || null
if (!isLogged) loading('login')
//Declaração de variáveis e atribuição das mesmas
const modal = document.querySelector('#add-livro')
//função para observar o modal enquanto é exibido
observ(modal)

changePerfil()
const imageUser = document.querySelector("#user")
const logoutBtn = document.getElementById('logout_btn');
const user = document.querySelector('.user')
const booksELement = document.querySelector('.books')

// Desestruturando  o nome do usuario ao html
const [{ name,img_user }] = isLogged
user.innerHTML = name || 'Convidado'
//criando a varíavel da imagem e atribuindo um source dinamico
const srcDefault = "./src/assets/User_Icon.png"
imageUser.src = img_user || srcDefault
// deslogar o usuario
logoutBtn.addEventListener('click', e => {
  e.preventDefault()
  loading('login')
  new StorageL('session').clearItem()
})

listbooks(booksELement, books)
$('.books').slick({
  speed: 500,
  dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 2000,

});