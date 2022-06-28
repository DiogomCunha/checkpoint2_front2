let btn = document.querySelector(".buttonCriar");
let lab = document.querySelector("label");
let nomeSign = document.getElementById("inputSignNome");
let sobrenomeSign = document.getElementById("inputSignSobrenome");
let emailSign = document.getElementById("inputSignMail");
let senhaSign = document.getElementById("inputSignPassword");
let senhaSignConf = document.getElementById("inputSignPasswordConfirm");

const urlApi = 'https://ctd-todo-api.herokuapp.com/v1/users';
const requestURL = './urlColetar.json';


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
