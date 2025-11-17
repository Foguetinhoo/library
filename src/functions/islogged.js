import { listUser } from "./createuser.js"
import { StorageL } from "./Storage.js"

// função para criar sessão de login para um unico usuário
const isLogged = email => {
    // Lista todos os usuários cadastrados
    const users = listUser() 
    //filtrar o usuário que vai logar
    const user_logged  = users.filter(user => user.email == email)
    //Adiciona somente o usuário logado na session
    const storage =  new StorageL('session')
    storage.saveItem('user_logged',user_logged)
}
export {isLogged}