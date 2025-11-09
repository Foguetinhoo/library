const imageUser =  document.querySelector("#user")
const srcImage = "./src/assets/User_Icon.png"

imageUser.src =  imageUser.src ||  srcImage

const logoutBtn = document.getElementById('logoutbtn');

if (logoutBtn) {
  logoutBtn.addEventListener('click', (e) => {
    e.preventDefault(); // impede o link de mudar antes da limpeza
    sessionStorage.clear(); // apaga todos os dados salvos
    window.location.href = 'login.html'; // redireciona pro login
  });
}
