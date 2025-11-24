import { books } from "./books.js";
import { createRentedbBook } from "./createdrentedbook.js";
import { dateAtual } from "./dateformat.js";
import { createMessages } from "./messages.js";
import { StorageL } from "./Storage.js";
import { validDate } from "./validation.js";
const user = new StorageL('session').getItem('user_logged')

function observ(element) {
  const elementoAlvo = element;

  // 2. Define as opções do observador (opcional)
  const opcoes = {
    root: null, // null significa que a viewport do navegador será o root (padrão)
    rootMargin: '0px', // margem ao redor do root
    threshold: 0.5 // 0.5 significa que 50% do elemento deve estar visível para o callback ser executado
  };

  // 3. Cria a função de callback que será executada quando a interseção ocorrer
  const callback = (entradas, observador) => {
    entradas.forEach(entrada => {
      // Se o elemento está intersectando (apareceu na tela)
      if (entrada.isIntersecting) {
        // carregar o modal com os dados

        const id_book = document.querySelector('.id')
        const img = document.querySelector('#img_book')
        const name_book = document.querySelector('#name-book')
        const footer = document.querySelector('.modal-body')
        const [{ img_src, title_book }] = books.filter(book => book.id == id_book.innerHTML)
        img.src = img_src
        name_book.value = title_book
        elementoAlvo.addEventListener("submit", e => {
          e.preventDefault()
          const data_fim = document.querySelector('#data-fim')
          const valid = validDate(data_fim.value)
          const [{ id }] = user
          if (valid.type == 'success') {
            const data = {

              id_user: id,
              id_book: Number(id_book.innerHTML),
              data_aluguel: dateAtual(),
              // data_aluguel: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
              data_fim: data_fim.value,
            }
            createRentedbBook(data)
            createMessages(footer, valid.message, valid.type)
            setTimeout(() => location.reload(), 2000)
          }
          createMessages(footer, valid.message, valid.type)
        })


        // Opcional: Para de observar o elemento após a primeira vez que ele aparece
        //   observador.unobserve(entrada.target);
      }

    });
  };

  // 4. Instancia o Intersection Observer
  const observador = new IntersectionObserver(callback, opcoes);

  // 5. Começa a observar o elemento alvo
  observador.observe(elementoAlvo);

}

export { observ }