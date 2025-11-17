import { listUser} from "./createuser.js"
import { createMessages } from "./messages.js"

const validData = (emailInp, passInp, islogin = true) => {
    try {
        const data = listUser() || []
        console.log(data)
        if (islogin == false) {
            const email = data.filter(user=> user.email == emailInp) 
            if (!email.length)
                return {
                    message: `Usuário criado com sucesso`,
                    type: 'success'
                }
                
                return {
                    message: "Usuário ja cadastrado",
                    type: 'error'
                }
        }
        else {
            let found_user = 0
            data.forEach(element => {
                if (element.email == emailInp && element.password == passInp) found_user++
            })
            if (found_user == 1) {
                return {
                    message: "Sucesso",
                    type: 'success'
                }
            }
            else {
                return {
                    message: `Usuário não encontrado`,
                    type: 'error'
                }
            }
        }
    } catch (e) {
        console.log(e)
        createMessages(document.body, e.message, 'error')
    }
}

export { validData }