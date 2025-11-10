import { loading } from "./functions/loading";

let _name = document.getElementById("name");
const _email = document.getElementById("email");
const _password = document.getElementById("password");
let isHidden =  true
loading
// --- REGISTER ---
const registerForm = document.querySelector(".registerForm");


  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // recebendo os valores e tirando os espaços antes e depois
    
    const name = _name.value.trim();
    const email = _email.value.trim();
    const password = _password.value.trim();

    

    

    loading
  });


// --- LOGIN ---
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const user = JSON.parse(sessionStorage.getItem("user"));

    let errorMsg = document.querySelector(".error-msg");
    if (errorMsg) errorMsg.remove();

    if (user && email === user.email && password === user.password) {
      window.location.href = "home.html";
    } else {
      // pega o input de senha e o container pai
      const passwordInput = document.getElementById("password");
      const parentDiv = passwordInput.closest(".inputform"); // garante que o aviso fica dentro do mesmo bloco
      const errorMsg = document.createElement("small");

      errorMsg.textContent = "Email ou senha incorretos.";
      errorMsg.className = "error-msg";

      parentDiv.appendChild(errorMsg); ""
    }
  });
