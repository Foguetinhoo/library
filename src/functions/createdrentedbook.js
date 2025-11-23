import { StorageL } from "./Storage.js";
const listBooks = () => {
    const storage = new StorageL('local')
    return storage.getItem('rented_books')
}
const createRentedbBook = ({ id_user, id_book, data_aluguel,data_fim }) => {
    const storage = new StorageL('local')
    let book_data = listBooks() || []
    let newbook = []
    let oldId = book_data.findLast(element => element?.id_rented) || null
    let id_rented = !oldId ? 1 : oldId.id_rented + 1

    newbook.push({id_rented, id_user, id_book,data_aluguel,data_fim},...book_data)

    storage.saveItem('rented_books', newbook)
    location.assign('livros.html')
}

export { createRentedbBook,listBooks }