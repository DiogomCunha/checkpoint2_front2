let btn = document.querySelector(".buttonCriar");
let lab = document.querySelector("label");
let nomeSign = document.getElementById("inputSignNome");
let sobrenomeSign = document.getElementById("inputSignSobrenome");
let emailSign = document.getElementById("inputSignMail");
let senhaSign = document.getElementById("inputSignPassword");
let senhaSignConf = document.getElementById("inputSignPasswordConfirm");
const urlApi = 'https://ctd-todo-api.herokuapp.com/v1/users';



function inputEntries() {
  if (
    
    ValidarInput(nomeSign, mascaraNome) &&
    ValidarInput(sobrenomeSign, mascaraSobrenome) &&
    ValidarInput(emailSign, mascaraEmail) &&
    ValidarInput(senhaSign, mascaraPwd) &&
    ValidarInput(senhaSignConf, mascaraPwd) &&
    senhaSign === senhaSignConf

  ) {
    btn.style.backgroundColor = "#7898FF";
    btn.disabled = false;

    const data = {

      firstName: nomeSign.value,
      lastName: sobrenomeSign.value,
      email: emailSign.value,
      password: senhaSign.value
  }
    const configRequis = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    fetch(urlApi, configRequis)

    .then((res)=>{

      if (res.status == 201){
        return res.json()
      }
    })

    .then(function(resp){
      console.log(resp)

      sucessoCadastro(nomeSign.value, sobrenomeSign.value, emailSign.value, resp.jwt)
    })

    .catch(error => {
        cadastroErro(error)
    })
  } else {

    alert('Todos os campos devem estar preenchidos corretamente para continuar!')
    btn.style.backgroundColor = "#D3D3D3";
    btn.disabled = true;
  }

};

function sucessoCadastro(nomeSign, sobrenomeSign, emailSign,)

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

