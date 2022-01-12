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

const submitBtn = document.getElementById('submit-btn');
submitBtn.disabled = true;

const agreement = document.getElementById('agreement');
agreement.addEventListener('click', function (event) {
  if (event.target.checked == true) {
    document.getElementById('submit-btn').disabled = false;
  } else {
    document.getElementById('submit-btn').disabled = true;
  }
});
// testando aqui - bonus 20 - inspirado http://jsfiddle.net/5pw5L/
