import { createMessages } from "./messages.js"
import { StorageL } from "./Storage.js"

const form_foto = document.querySelector('#file_form')
const file_perfil = document.querySelector('#file_perfil')



const changePerfil = () => {
    form_foto.addEventListener('submit', function (evt) {
        if (!(evt.target && evt.target.files && evt.target.files.length > 0)) {
            return;
        }
        let new_src = ""
        var r = new FileReader();
        // Define o que ocorre quando concluir:
        r.onload = function () {
            // Define o `src` do elemento para o resultado:
            new_src = r.result
            // Lê o arquivo e cria um link (o resultado vai ser enviado para o onload.
        }
        r.readAsDataURL(file_perfil.files[0]);
        const storage = new StorageL('local')
        let { id, name, email, img_user } = storage.getItem('user')
        img_user = new_src
         console.log(img_user)
        const data = { id, name, email, img_user }
        storage.saveItem('user', data)
    })
}

export { changePerfil }