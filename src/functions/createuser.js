

const createUser = ({name,email,password}) =>{
    sessionStorage.setItem("loading",true)

    sessionStorage.setItem("user", JSON.stringify({name, email, password }));

    location.assign('login.html')

}

export {createUser}







