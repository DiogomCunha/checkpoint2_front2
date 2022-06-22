const mascaraEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g
const mascaraPwd = /.{4,}/g
let btn = document.querySelector(".buttonAcessar");
let lab = document.querySelector("label");
let email = document.getElementById("inputEmail");
let senha = document.getElementById("inputPassword");

function inputEntries() {
  if (ValidarInput(email, mascaraEmail) && ValidarInput(senha, mascaraPwd)) {
    btn.style.backgroundColor = "#7898FF";
    btn.disabled = false;
  } else {
    btn.style.backgroundColor = "#D3D3D3"
    btn.disabled = true;
  }
}

function ValidarInput(texto, mascara) {
  var resultado = texto.value.match(mascara);
  if (resultado != null) {
    return true;
  }
  else {
    return false;
  }
}