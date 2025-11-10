import { loginUser } from "./createuser.js"
import { createMessages } from "./messages.js"

const validLogin = (emailInp, passInp, islogin = true) => {
    try {
        const { name, email, password } = loginUser()
        if (!islogin) {
            console.log(emailInp,email)
            if (emailInp == email)
                return {
                    message: "Usuário ja cadastrado",
                    type: 'error'
                }
        }
        else {
            if (emailInp != email || passInp != password)
                return {
                    message: "Email e/ou senha invalido(s)",
                    type: 'error'
                }
            return {
                message: `Seja bem vindo ${name}`,
                type: 'success'
            }
        }
    } catch (e) {
        console.log(e)
        createMessages(document.body, e.message, 'error')
    }
}

export { validLogin }