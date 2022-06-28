let btn = document.querySelector(".buttonCriar");
let lab = document.querySelector("label");
let nomeSign = document.getElementById("inputSignNome");
let sobrenomeSign = document.getElementById("inputSignSobrenome");
let emailSign = document.getElementById("inputSignMail");
let senhaSign = document.getElementById("inputSignPassword");
let senhaSignConf = document.getElementById("inputSignPasswordConfirm");

const urlApi = 'https://ctd-todo-api.herokuapp.com/v1/users';



function leituraApi() {

  

}

function inputEntries() {
  if (
    
    ValidarInput(nomeSign, mascaraNome) &&
    ValidarInput(sobrenomeSign, mascaraSobrenome) &&
    ValidarInput(emailSign, mascaraEmail) &&
    ValidarInput(senhaSign, mascaraPwd) &&
    ValidarInput(senhaSignConf, mascaraPwd)
  ) {
    btn.style.backgroundColor = "#7898FF";
    btn.disabled = false;
  } else {
    btn.style.backgroundColor = "#D3D3D3";
    btn.disabled = true;
  }
}

//passo 1: 
//desenvolver o corpo da requisição
//método
//cabeçalho
//corpo

//passo 2: 
//efetuar o fetch da API
//tratar no segundo then a execução da função

//passo 3: criar a função de cadastro
//armazenar no local storage o nome, sobrenome e e-mail
//armazenar utilizando objeto json (json stringfy)

