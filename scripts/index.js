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
};

