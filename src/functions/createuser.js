
const loginUser = () => {
    const {name,email,password} = JSON.parse(sessionStorage.getItem('user'))
    return {
        name,
        email,
        password
    }
}

// funcção para criar o usuário no session Storage
const createUser = (name,email,password) =>{
    sessionStorage.setItem("loading",true)
    sessionStorage.setItem("user", JSON.stringify({name, email, password }));
    location.assign('login.html')
}

export {createUser,loginUser}







