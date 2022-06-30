let btn = document.querySelector(".buttonAcessar");
let lab = document.querySelector("label");
let email = document.getElementById("inputEmail");
let senha = document.getElementById("inputPassword");
const urlApi = "https://https://ctd-todo-api.herokuapp.com/v1/users/login";

function validacaoLogin() {
  if (ValidarInput(email, mascaraEmail) && ValidarInput(senha, mascaraPwd)) {
    btn.style.backgroundColor = "#7898FF";
    btn.disabled = false;
  } else {
    btn.style.backgroundColor = "#D3D3D3";
    btn.disabled = true;
  }
}

function inputEntries() {
  const data = {
    email: emailSign.value,
    password: senhaSign.value,
  };
  const configRequis = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch(urlApi, configRequis)
      .then((res) => {
        return res.json();
      })
}
