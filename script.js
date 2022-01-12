const loginBtn = document.getElementById('trybewarts-login-btn');

loginBtn.addEventListener('click', function (event) {
  event.preventDefault();
  const email = document.getElementById('trybewarts-login-email').value;
  const senha = document.getElementById('trybewarts-login-pwd').value;
  if (email === 'tryber@teste.com') {
    if (senha === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  } else {
    alert('Email ou senha inválidos.');
  }
});

const submitBtn = document.getElementById('submit-btn');
submitBtn.disabled = true;

const agreement = document.getElementById('agreement');
agreement.addEventListener('click', function (event) {
  if (event.target.checked === true) {
    document.getElementById('submit-btn').disabled = false;
  } else {
    document.getElementById('submit-btn').disabled = true;
  }
});

// testando aqui - bonus 20 - inspirado http://jsfiddle.net/5pw5L/
const textarea = document.getElementById('textarea');

textarea.addEventListener('keyup', function (event) {
  const qtdDeLetras = event.target.value.split('').length;
  const qtdDeLetrasMax = 500;
  const qtdDeLetrasRestantes = qtdDeLetrasMax - qtdDeLetras;
  document.getElementById('counter').innerText = qtdDeLetrasRestantes;
});

function nomeFinal() {
  const nome = document.getElementById('input-name').value;
  const sobrenome = document.getElementById('input-lastname').value;
  const nomeCompleto = `${nome} ${sobrenome}`;
  return nomeCompleto;
}

function emailFinal() {
  const email = document.getElementById('input-email').value;
  return email;
}

function casaFinal() {
  const casa = document.getElementById('house').value;
  return casa;
}

function familiaFinal() {
  const familia = document.getElementsByName('family');
  for (let i = 0; i < familia.length; i += 1) {
    if (familia[i].checked === true) {
      let familiaFinal = familia[i].value;
      return familiaFinal;
    }
  }
}

function materiasFinal() {
  const materias = document.getElementsByName('conteudo');
  let materiasFinal = [];
  for(let i = 0; i < materias.length; i += 1) {
    if (materias[i].checked === true) {
      materiasFinal.push(materias[i].value);
    }
  }
  return materiasFinal;
}

function avaliacaoFinal() {
  const avaliacao = document.getElementsByClassName('evaluation');
  for (let i = 0; i < avaliacao.length; i += 1) {
    if (avaliacao[i].checked === true) {
      let avaliacaoFinal = avaliacao[i].value;
      return avaliacaoFinal;
    }
  }
}

function observacaoFinal() {
  const observacao = document.getElementById('textarea').value;
  return observacao;
}

function apagaTudo() {
  document.getElementById('evaluation-form').remove();
}

function criaNome(nome) {
  const p = document.createElement('p');
  p.innerText = `Nome: ${nome}`;
  document.getElementById('evaluation-form').appendChild(p);
}

function criaEmail(email) {
  const p = document.createElement('p');
  p.innerText = `Email: ${email}`;
  document.getElementById('evaluation-form').appendChild(p);
}

function criaCasa(casa) {
  const p = document.createElement('p');
  p.innerText = `Casa: ${casa}`;
  document.getElementById('evaluation-form').appendChild(p);
}

function criaFamilia(familia) {
  const p = document.createElement('p');
  p.innerText = `Família: ${familia}`;
  document.getElementById('evaluation-form').appendChild(p);
}

function criaMaterias(materias) {
  const p = document.createElement('p');
  p.innerText = `Matérias: ${materias.join(', ')}`;
  document.getElementById('evaluation-form').appendChild(p);
}

function criaAvaliacao(avaliacao) {
  const p = document.createElement('p');
  p.innerText = `Avaliação: ${avaliacao}`;
  document.getElementById('evaluation-form').appendChild(p);
}

function criaObservacao(observacao) {
  const p = document.createElement('p');
  p.innerText = `Observações: ${observacao}`;
  document.getElementById('evaluation-form').appendChild(p);
}

function criaNovos(nome, email, casa, familia, materias, avaliacao, observacao) {
  const form = document.createElement('form');
  form.id = 'evaluation-form';
  const img = document.getElementById('trybewarts-forms-logo');
  document.getElementsByTagName('main')[0].insertBefore(form, img);
  criaNome(nome);
  criaEmail(email);
  criaCasa(casa);
  criaFamilia(familia);
  criaMaterias(materias);
  criaAvaliacao(avaliacao);
  criaObservacao(observacao);
}

submitBtn.addEventListener('click', function (event) {
  event.preventDefault();
  const nome = nomeFinal();
  const email = emailFinal();
  const casa = casaFinal();
  const familia = familiaFinal();
  const materias = materiasFinal();
  const avaliacao = avaliacaoFinal();
  const observacao = observacaoFinal();
  apagaTudo();
  criaNovos(nome, email, casa, familia, materias, avaliacao, observacao);
});
