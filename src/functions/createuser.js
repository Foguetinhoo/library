import { StorageL } from "./Storage.js"

const listUser = () =>{
    const storage  = new StorageL('local')
    return  storage.getItem('user')
}
// fun  ção para criar o usuário no session Storage
const createUser = (name,email,password) =>{
    
    let userdata = listUser() ||[]
    let newuser = []
    let oldId = userdata.findLast(element => element?.id) || null
    let id = !oldId ? 1 : oldId.id + 1

    newuser.push({id,name, email, password},...userdata)
    
    const storage  = new StorageL('local')
    storage.saveItem('user',newuser)
    location.assign('login.html')
}

export {createUser,listUser}







