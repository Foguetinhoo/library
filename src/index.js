// --- REGISTER ---
const registerForm = document.querySelector(".registerForm");

if (registerForm) { // só roda se o elemento existir
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    sessionStorage.setItem("user", JSON.stringify({ name, email, password }));

    window.location.href = "login.html";
  });
}

// --- LOGIN ---
const loginForm = document.querySelector(".loginForm");

if (loginForm) { // só roda se o elemento existir
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

      parentDiv.appendChild(errorMsg);""
    }
  });
}
// 👁 Olhinho simples e correto — automático pra todos os campos de senha
document.querySelectorAll('input[type="password"]').forEach(input => {
  const btn = document.createElement('span');
  btn.innerHTML = '<i class="bi bi-eye-slash"></i>'; // começa com olho fechado
  btn.className = 'eye-btn';
  input.parentElement.style.position = 'relative';
  input.parentElement.appendChild(btn);

  btn.addEventListener('click', () => {
    const isHidden = input.type === 'password';
    input.type = isHidden ? 'text' : 'password';
    btn.innerHTML = isHidden
      ? '<i class="bi bi-eye"></i>'       // olho aberto = mostrando senha
      : '<i class="bi bi-eye-slash"></i>'; // olho cortado = senha escondida
  });
});
