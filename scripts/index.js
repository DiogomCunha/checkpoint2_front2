let btn = document.querySelector(".buttonAcessar");
let lab = document.querySelector("label");
let email = document.getElementById("inputEmail");
let senha = document.getElementById("inputPassword");
const urlApi = "https://ctd-todo-api.herokuapp.com/v1/users/login";




email.addEventListener("change", validacaoLogin);
senha.addEventListener("change", validacaoLogin);

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
    email: email.value,
    password: senha.value,
  };
  const configRequis = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  };
  
  return fetch(urlApi, configRequis)
    .then((res) => {
      return res.json();
    })
    .then(function (resp) {
      console.log(resp);

      sucessoLogin(email.value, senha.value, resp);
      return true;
    })
    .catch((error) => {
      erroLogin(error);
      return false;
    });
}


function sucessoLogin(email, senha) {
  localStorage.getItem(
    "user",
    JSON.stringify({
      email: email,
      senha: senha,
    })
  );
}
function erroLogin(statusErro) {
  console.log("Erro ao fazer login");
  console.log(statusErro);
  alert('')
}

btn.addEventListener("click", (evento) => {
  if (!inputEntries()){
    evento.preventDefault();
    
  }

});