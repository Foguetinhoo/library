import { loginUser, verifyUser } from "./createuser.js"
import { createMessages } from "./messages.js"

const validData = (emailInp, passInp, islogin = true) => {
    try {
        const data = verifyUser()
        console.log('islogin =>', islogin)
        if (islogin == false) {
            if (emailInp == data.email)
                return {
                    message: "Usuário ja cadastrado",
                    type: 'error'
                }

            return {
                message: `Usuário criado com sucesso`,
                type: 'success'
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