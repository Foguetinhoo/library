// importando funções de outros arquivos
import { changePerfil } from "./functions/changeperfil.js"
import { listBooksRented } from "./functions/listbooks.js"
import { loading } from "./functions/loading.js"
import { createMessages } from "./functions/messages.js"
import { StorageL } from "./functions/Storage.js"

const imageUser = document.querySelector("#user")
const user = document.querySelector('.user')
const isLogged = new StorageL('session').getItem('user_logged') || null
if (!isLogged) loading('login')
// const rented_books = 
const [{ name,img_user }] = isLogged
user.innerHTML = name || 'Convidado'
//criando a varíavel da imagem e atribuindo um source dinamico
const srcDefault = "./src/assets/User_Icon.png"
imageUser.src = img_user || srcDefault

const books = document.querySelector('.rented_books')
const rent_book = new StorageL('local').getItem('rented_books') || null
const logoutBtn = document.getElementById('logout_btn');
const qt_books =  document.querySelector('.qt')
qt_books.classList.add('fw-bolder')
changePerfil()
while(typeof rent_book == 'string'){
  createMessages(books,'dados não encontrados','danger')
} 
listBooksRented(books)

rent_book.length == 1 ? qt_books.innerHTML = `Foram alugados ${rent_book.length} livro`
:qt_books.innerHTML = `Foram alugados ${rent_book.length} livros`



logoutBtn.addEventListener('click',e =>{
  e.preventDefault()
    loading('login')
    new StorageL('session').clearItem()
})

