let btn = document.querySelector(".buttonCriar");
let lab = document.querySelector("label");
let nome = document.getElementById("inputSignNome");
let sobrenome = document.getElementById("inputSignSobrenome");
let email = document.getElementById("inputSignMail");
let senha = document.getElementById("inputSignPassword");
let senhaConf = document.getElementById("inputSignPasswordConfirm");
const urlApi = "https://ctd-todo-api.herokuapp.com/v1/users";

btn.addEventListener("click", (evento) => {
  evento.preventDefault();

});

email.addEventListener('change',validacao)
nome.addEventListener('change',validacao)
sobrenome.addEventListener('change',validacao)
senha.addEventListener('change',validacao)
senhaConf.addEventListener('change',validacao)

function validacao(){
  if (
    ValidarInput(nome, mascaraNome) &&
    ValidarInput(sobrenome, mascaraSobrenome) &&
    ValidarInput(email, mascaraEmail) &&
    ValidarInput(senha, mascaraPwd) &&
    ValidarInput(senhaConf, mascaraPwd) 
    && senha.value === senhaConf.value
  ){btn.style.backgroundColor = "#7898FF";
  btn.disabled = false;}
  
  else {
    btn.style.backgroundColor = "#D3D3D3";
    btn.disabled = true;}
};



function inputEntries() {
   
    

    const data = {
      firstName: nome.value,
      lastName: sobrenome.value,
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
    fetch(urlApi, configRequis)
      .then((res) => {
        return res.json();
      })

      .then(function (resp) {
        console.log(resp);

        sucessoCadastro(
          nome.value,
          sobrenome.value,
          email.value,
          senha.value,
          resp
        );
      })

      .catch((error) => {
        cadastroErro(error);
      });
  } 
    //alert('Todos os campos devem estar preenchidos corretamente para continuar!')
  

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

//passo 1:
//desenvolver o corpo da requisição
//método
//cabeçalho
//corpo

//passo 2:
//efetuar o fetch da API
//tratar no segundo then a execução da função

//passo 3:
//criar a função de cadastro
//armazenar no local storage o nome, sobrenome e e-mail
//armazenar utilizando objeto json (json stringfy)