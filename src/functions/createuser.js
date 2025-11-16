
const loginUser = () => {
    const data = JSON.parse(sessionStorage.getItem('user'))
    const {name,email,password} = data

    return {
        name,
        email,
        password
    }
}

const verifyUser = () =>{
    const data = JSON.parse(sessionStorage.getItem('user')) || []
    return data
}
// fun  ção para criar o usuário no session Storage
const createUser = (name,email,password) =>{
    let userdata = JSON.parse(sessionStorage.getItem('user')) ||[]
    let newuser = []

    newuser.push({name, email, password},...userdata)

    sessionStorage.setItem("loading",true)
    sessionStorage.setItem("user", JSON.stringify(newuser));
    location.assign('login.html')
}

export {createUser,loginUser,verifyUser}







