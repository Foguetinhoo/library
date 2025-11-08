document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // impede recarregar a página
    window.location.href = "register.html"; // redireciona
  });