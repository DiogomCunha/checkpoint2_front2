let btn = document.querySelector(".buttonCriar");
let lab = document.querySelector("label");
let nome = document.getElementById("inputSignNome");
let sobrenome = document.getElementById("inputSignSobrenome");
let email = document.getElementById("inputSignMail");
let senha = document.getElementById("inputSignPassword");
let senhaConf = document.getElementById("inputSignPasswordConfirm");
const urlApi = "https://ctd-todo-api.herokuapp.com/v1/users";
const utils = new Utils();

btn.addEventListener("click", (evento) => {

  evento.preventDefault();

});

email.addEventListener('change', validacao)
nome.addEventListener('change', validacao)
sobrenome.addEventListener('change', validacao)
senha.addEventListener('change', validacao)
senhaConf.addEventListener('change', validacao)

function validacao() {
  if (
    ValidarInput(nome, mascaraNome) &&
    ValidarInput(sobrenome, mascaraSobrenome) &&
    ValidarInput(email, mascaraEmail) &&
    ValidarInput(senha, mascaraPwd) &&
    ValidarInput(senhaConf, mascaraPwd)
    && senha.value === senhaConf.value
  ) {
    btn.style.backgroundColor = "#7898FF";
    btn.disabled = false;
  }

  else {
    btn.style.backgroundColor = "#D3D3D3";
    btn.disabled = true;
  }
};



function cadastrarUsuario() {
  const data = {
    firstName: nome.value,
    lastName: sobrenome.value,
    email: email.value,
    password: senha.value,
  };
  utils.BaseFetch(urlApi, data, utils.TIPO_FETCH.Post)
    .then(function (resp) {
      console.log(resp);
      sucessoCadastro(
        nome.value,
        sobrenome.value,
        email.value,
        senha.value,
        resp
      );
      window.location.href = "./index.html";
    })
    .catch((error) => {
      cadastroErro(error);
    });
}

function sucessoCadastro(nomeSign, sobrenomeSign, emailSign, senhaSign, jwtRecebido) {
  localStorage.setItem(
    "user",
    JSON.stringify({
      nome: nomeSign,
      sobrenome: sobrenomeSign,
      email: emailSign,
      senha: senhaSign,
      token: jwtRecebido,
    }));

  alert("Usuário criado com sucesso!");
}

function cadastroErro(statusErro) {
  console.log("Erro ao cadastrar usuário");
  console.log(statusErro);
}


btn.addEventListener("click", (evento) => {
  evento.preventDefault();
  cadastrarUsuario();
});