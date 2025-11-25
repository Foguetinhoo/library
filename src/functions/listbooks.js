import { books } from "./books.js"
import { listBooks } from "./createdrentedbook.js"
import { listUser } from "./createuser.js"
import { format, quant } from "./dateformat.js"

const listbooks = (element, data) => {

    //array dos livros cadastrados para gerar a lista em html
    for (const book of data) {
        // crio os elementos que vão fazer parte do cartão e suas respectivas propriedades
        const form = document.createElement('form')
        form.id = book.id
        form.addEventListener('submit', atrib)
        const card = document.createElement("div")
        card.classList.add('card')
        card.id = book.id
        const card_image = document.createElement("img")
        card_image.classList.add('card-img-top')
        card_image.src = book.img_src
        card_image.alt = 'Book'
        const card_body = document.createElement("div")
        card_body.classList.add("card-body")
        const card_title = document.createElement("h6")
        card_title.classList.add('card-title', 'fw-medium')
        card_title.innerHTML = book.title_book
        const card_sub = document.createElement("p")
        card_sub.classList.add("card-subtitle", "fst-italic")
        card_sub.innerHTML = book.author
        const card_text = document.createElement("span")
        card_text.classList.add('card-text')
        card_text.innerHTML = `Publicado em ${book.year_pub}`
        const card_footer = document.createElement("div")
        card_footer.classList.add('card-footer')
        const card_button = document.createElement("button")
        card_button.href = "#"
        card_button.classList.add('btn', 'btn-primary')
        card_button.id = "book_al"
        card_button.setAttribute('type', 'submit')
        card_button.setAttribute('data-bs-toggle', 'modal')
        card_button.setAttribute('data-bs-target', "#add-livro")
        card_button.innerHTML = 'Alugar <i class="fa-solid fa-bookmark"></i>'

        card_footer.append(card_button)
        card_body.append(card_title, card_sub, card_text, card_footer)
        form.append(card_image, card_body)
        card.append(form)
        element.append(card)
    }
}

function atrib(e) {
    e.preventDefault()
    const id_book = document.querySelector('.id')
    id_book.innerHTML = e.target.id
}

function listBooksRented(element) {
    const booksrents = listBooks()
    const user = listUser()
    const bookR = books
    //array dos livros cadastrados para gerar a lista em html
    for (const book of booksrents) {
        // crio os elementos que vão fazer parte do cartão e suas respectivas propriedades
        const card = document.createElement("div")
        card.classList.add('card')
        card.id = book.id_rented
        const card_image = document.createElement("img")
        card_image.classList.add('card-img-top')

        const [book_rent] = bookR.filter(element => element.id == book.id_book)
        card_image.src = book_rent.img_src
        card_image.alt = 'Book'
        const [user_alug] = user.filter(user => user.id == book.id_user)
        const card_body = document.createElement("div")
        card_body.classList.add("card-body")
        const card_title = document.createElement("h6")
        card_title.classList.add('card-title', 'fw-bold')
        card_title.innerHTML = book_rent.title_book
        const card_sub = document.createElement("p")
        card_sub.classList.add("card-subtitle", "fst-italic")
        card_sub.innerHTML = `por ${user_alug.name}`
        const card_text = document.createElement('small')
        card_text.classList.add('card-text')
        card_text.innerHTML = `<i class="fa-solid fa-calendar-plus"></i> ${format(book.data_aluguel)} `
        const card_footer = document.createElement("div")
        card_footer.classList.add('card-footer')
        const date_element = document.createElement('small')
        date_element.classList.add('fst-italic')
        date_element.innerHTML = `<i class="fa-solid fa-calendar-days"></i>  ${format(book.data_fim)}`
        const falt = quant(book.data_aluguel,book.data_fim)
        const sm = document.createElement('p')
        sm.classList.add('fw-lighter')
        sm.innerHTML = `<i class="fa-regular fa-clock"></i> Devolução em ${falt} dias `

        card_footer.append(sm)
        card_body.append(card_title,card_sub, card_text,date_element)
        card.append(card_image,card_body,card_footer)
        element.prepend(card)

    }
}

export { listbooks, atrib, listBooksRented }