let btn = document.querySelector(".buttonCriar");
let lab = document.querySelector("label");
let nomeSign = document.getElementById("inputSignNome");
let sobrenomeSign = document.getElementById("inputSignSobrenome");
let emailSign = document.getElementById("inputSignMail");
let senhaSign = document.getElementById("inputSignPassword");
let senhaSignConf = document.getElementById("inputSignPasswordConfirm");
const urlApi = "https://ctd-todo-api.herokuapp.com/v1/users";

btn.addEventListener("click", (evento) => {
  evento.preventDefault();

 
});

emailSign.addEventListener('change',validacao)
nomeSign.addEventListener('change',validacao)
sobrenomeSign.addEventListener('change',validacao)
senhaSign.addEventListener('change',validacao)
senhaSignConf.addEventListener('change',validacao)

function validacao(){
  if (
    ValidarInput(nomeSign, mascaraNome) &&
    ValidarInput(sobrenomeSign, mascaraSobrenome) &&
    ValidarInput(emailSign, mascaraEmail) &&
    ValidarInput(senhaSign, mascaraPwd) &&
    ValidarInput(senhaSignConf, mascaraPwd) 
    && senhaSign.value === senhaSignConf.value
  ){btn.style.backgroundColor = "#7898FF";
  btn.disabled = false;}
  
  else {
    btn.style.backgroundColor = "#D3D3D3";
    btn.disabled = true;}
};



function inputEntries() {
   
    

    const data = {
      firstName: nomeSign.value,
      lastName: sobrenomeSign.value,
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

      .then(function (resp) {
        console.log(resp);

        sucessoCadastro(
          nomeSign.value,
          sobrenomeSign.value,
          emailSign.value,
          resp
        );
      })

      .catch((error) => {
        cadastroErro(error);
      });
  } 
    //alert('Todos os campos devem estar preenchidos corretamente para continuar!')
  

function sucessoCadastro(nomeSign, sobrenomeSign, emailSign, jwtRecebido) {
  localStorage.setItem(
    "user",
    JSON.stringify({
      nomeSign: nomeSign,
      sobrenomeSign: sobrenomeSign,
      emailSign: emailSign,
      token: jwtRecebido,
    })
  );

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
