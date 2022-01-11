const loginBtn = document.getElementById('trybewarts-login-btn');

loginBtn.addEventListener('click', function (event) {
  event.preventDefault();
  const email = document.getElementById('trybewarts-login-email').value;
  const senha = document.getElementById('trybewarts-login-pwd').value;
  if (email == "tryber@teste.com" ){
    if (senha == "123456") {
      alert("Olá, Tryber!");
    } else {
      alert("Email ou senha inválidos.");
    }
  } else {
    alert("Email ou senha inválidos.");
  }
});