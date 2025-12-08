import { createMessages } from "./messages.js"
import { StorageL } from "./Storage.js"

const form_foto = document.querySelector('#file_form')
const file_perfil = document.querySelector('#file_perfil')



const changePerfil = () => {
    const arr = []
    // evento para pegar o arquivo toda vez que mudar
    file_perfil.addEventListener('change', function(event){
    const file = event.target.files[0]
      arr.push(file.name)
         
    })
    form_foto.addEventListener('submit', function (evt) {
        evt.preventDefault()
        if(file_perfil.value != ""){
            const user_local = new StorageL('local').getItem('user')
            let [user_logg]  = new StorageL('session').getItem('user_logged')
            const userin  = user_local.map(user => user.id == user_logg.id)

            let { id, name, email, img_user} = userin
            img_user = `./src/upload/${arr[0]}`
            const data = { id, name, email, img_user }

            new StorageL('local').saveItem('user', data)
            new StorageL('session').saveItem('user_logged',data)
        }
    })
}

export { changePerfil }