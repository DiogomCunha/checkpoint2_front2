let btn = document.querySelector(".buttonAcessar");
let lab = document.querySelector("label");
let email = document.getElementById("inputEmail");
let senha = document.getElementById("inputPassword");

function inputEntries() {
  if (email.value != "" && senha.value != "") {
    btn.style.backgroundColor = "#7898FF";
    btn.disabled = false;
  } else if (email.value == "" || senha.value == "") {
    btn.style.backgroundColor = "#D3D3D3"
    btn.disabled = true;
  }
}

email.value = email.value.trim();
senha.value = senha.value.trim();
