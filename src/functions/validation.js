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

const validDate = (date) => {
    try {
       const today = new Date();
    
    // Opcional: Zerar as horas/minutos/segundos de hoje para comparar apenas as datas (dia, mês, ano)
    today.setHours(0, 0, 0, 0);

    // 2. Criar um objeto Date a partir da string de input
    // O construtor Date() lida bem com o formato YYYY-MM-DD de inputs HTML
    const dataInput = new Date(date);

    // Opcional: Zerar as horas/minutos/segundos da data de input para comparação justa
    dataInput.setHours(0, 0, 0, 0);

    // 3. Validar se a data de input é válida
    if (isNaN(dataInput.getTime())) {
        return {  type: 'error', 
            message: "Data invalida tente novamente" };
    }

    // 4. Comparar as datas usando o operador '<'
    if (dataInput < today) {
        return { 
            type: 'error', 
            message: "Informe uma data maior que hoje" 
        };
    } 
    return {
        type:'success',
        message:'Livro alugado'
    }
    
    } catch (e) {
        console.log(e)
        createMessages(document.body, e.message, 'error')
    }
}
export { validData,validDate }