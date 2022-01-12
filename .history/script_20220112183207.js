const loginBtn = document.getElementById('trybewarts-login-btn');

// loginBtn.addEventListener('click', function (event) {
loginBtn.addEventListener('click', (event) => {
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
agreement.addEventListener('click', (event) => {
  if (event.target.checked === true) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});

// testando aqui - bonus 20 - inspirado http://jsfiddle.net/5pw5L/
const textarea = document.getElementById('textarea');

textarea.addEventListener('keyup', (event) => {
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

function familiaFinalF() {
  const familia = document.getElementsByName('family');
  for (let i = 0; i < familia.length; i += 1) {
    if (familia[i].checked === true) {
      const familiaFinal = familia[i].value;
      return familiaFinal;
    }
  }
}

function materiasFinalF() {
  const materias = document.getElementsByName('conteudo');
  const materiasFinal = [];
  for (let i = 0; i < materias.length; i += 1) {
    if (materias[i].checked === true) {
      materiasFinal.push(materias[i].value);
    }
  }
  return materiasFinal;
}

function avaliacaoFinalF() {
  const avaliacao = document.getElementsByClassName('evaluation');
  for (let i = 0; i < avaliacao.length; i += 1) {
    if (avaliacao[i].checked === true) {
      const avaliacaoFinal = avaliacao[i].value;
      return avaliacaoFinal;
    }
  }
}

function observacaoFinal() {
  const observacao = document.getElementById('textarea').value;
  return observacao;
}

function apagaTudo(formId) {
  document.getElementById(formId).remove();
}

function criaNome(nome, formId) {
  const p = document.createElement('p');
  p.innerText = `Nome: ${nome}`;
  document.getElementById(formId).appendChild(p);
}

function criaEmail(email, formId) {
  const p = document.createElement('p');
  p.innerText = `Email: ${email}`;
  document.getElementById(formId).appendChild(p);
}

function criaCasa(casa, formId) {
  const p = document.createElement('p');
  p.innerText = `Casa: ${casa}`;
  document.getElementById(formId).appendChild(p);
}

function criaFamilia(familia, formId) {
  const p = document.createElement('p');
  p.innerText = `Família: ${familia}`;
  document.getElementById(formId).appendChild(p);
}

function criaMaterias(materias, formId) {
  const p = document.createElement('p');
  p.innerText = `Matérias: ${materias.join(', ')}`;
  document.getElementById(formId).appendChild(p);
}

function criaAvaliacao(avaliacao, formId) {
  const p = document.createElement('p');
  p.innerText = `Avaliação: ${avaliacao}`;
  document.getElementById(formId).appendChild(p);
}

function criaObservacao(observacao, formId) {
  const p = document.createElement('p');
  p.innerText = `Observações: ${observacao}`;
  document.getElementById(formId).appendChild(p);
}

const form = 'evaluation-form';

function criaNovos(nome, email, casa, familia) {
  const newForm = document.createElement('form');
  newForm.id = form;
  const img = document.getElementById('trybewarts-forms-logo');
  document.getElementsByTagName('main')[0].insertBefore(newForm, img);
  criaNome(nome, form);
  criaEmail(email, form);
  criaCasa(casa, form);
  criaFamilia(familia, form);
}

function criaNovos2(materias, avaliacao, observacao) {
  criaMaterias(materias, form);
  criaAvaliacao(avaliacao, form);
  criaObservacao(observacao, form);
}

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const nome = nomeFinal();
  const email = emailFinal();
  const casa = casaFinal();
  const familia = familiaFinalF();
  const materias = materiasFinalF();
  const avaliacao = avaliacaoFinalF();
  const observacao = observacaoFinal();
  apagaTudo('evaluation-form');
  criaNovos(nome, email, casa, familia);
  criaNovos2(materias, avaliacao, observacao);
});