let btn = document.querySelector(".buttonAcessar");
let lab = document.querySelector("label");
let email = document.getElementById("inputEmail");
let senha = document.getElementById("inputPassword");
const urlApi = "https://ctd-fe2-todo-v2.herokuapp.com/v1/users/login";
const utils = new Utils();

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

function cadastrarUsuario() {
  const data = {
    email: email.value,
    password: senha.value,
  };
  utils.BaseFetch(urlApi, data, utils.TIPO_FETCH.Post).then(function (resp) {
    console.log("Fetch - segunda etapa");
    gravarToken(email.value, senha.value, resp);
    localStorage.setItem("token", resp.jwt);
    window.location.href = "./tarefas.html";
  })

  .catch((error) => {
    console.log("Erro ao fazer login");
    console.log(error);
    alert("Erro ao fazer login");
  });
}

function gravarToken(email, senha) {
  localStorage.getItem(
    "user",
    JSON.stringify({
      email: email,
      senha: senha,
    })
  );
}

btn.addEventListener("click", (evento) => {
  evento.preventDefault();
  cadastrarUsuario();
});
