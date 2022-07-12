const userNameTarefas = document.querySelector("#userName");
const listaTarefasPendentes = document.querySelector("#tarefasPendentes");
const listaTarefasConcluidas = document.querySelector("#tarefasTerminadas");
let desc = document.querySelector("#novaTarefa");
let bot = document.querySelector("#botaoTaf");

window.onload = function () {
  receberUser();
  listaTaf();
};

function receberUser() {
  const URLApi = "https://ctd-fe2-todo-v2.herokuapp.com/v1/users/getMe";
  const jwt = localStorage.getItem("token");

  const configReceber = {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: jwt,
    },
  };

  fetch(URLApi, configReceber)
    .then((resp) => resp.json())

    .then(function (dados) {
      const dadosUser = `${dados.firstName} ${dados.lastName[0] + "."}`;

      userNameTarefas.innerHTML = dadosUser;
    })

    .catch((err) => {
      console.log(err);
    });
}

function renderTaf(tasks) {
  listaTarefasPendentes.innerHTML = "";
  listaTarefasConcluidas.innerHTML = "";

  setTimeout(() => {
    for (let task of tasks) {
      const dataBR = new Date(task.createdAt).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });

      if (task.completed) {
        listaTarefasConcluidas.innerHTML += `<li class="tarefa">
        <div class="not-done" onclick="removerTarefa(${task.id})"></div>
        <div class="descricao">
          <p class="nome">${task.description}</p>
          <p class="timestamp"> Criada em: ${dataBR}</p>
        </div>
      </li>`;
      } else {
        listaTarefasPendentes.innerHTML += `<li class="tarefa">
        <div class="not-done" onclick="atualizarTarefa(${task.id},true)"></div>
        <div class="descricao">
          <p class="nome">${task.description}</p>
          <p class="timestamp"> Criada em: ${dataBR}</p>
        </div>
      </li>`;
      }
    }
  }, 2000);
}

function listaTaf() {
  const URLApi = "https://ctd-fe2-todo-v2.herokuapp.com/v1/tasks";
  const jwt = localStorage.getItem("token");

  const configReceber = {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: jwt,
    },
  };

  fetch(URLApi, configReceber)
    .then((resp) => resp.json())
    .then((dados) => {
      console.log(dados);

      renderTaf(dados);
    });
}
function criarTaf() {
  const URLApi = "https://ctd-fe2-todo-v2.herokuapp.com/v1/tasks";
  const jwt = localStorage.getItem("token");
  const configReceber = {
    method: "POST",
    body: "",
    headers: {
      "content-type": "application/json",
      Authorization: jwt,
    },
  };
  configReceber.body = JSON.stringify({
    description: desc.value,
    completed: false,
  });

  desc.value = "";

  fetch(URLApi, configReceber)
    .then((resp) => resp.json())
    .then((dados) => {
      console.log(dados);
      
    
      const dataBR = new Date(dados.createdAt).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });

      listaTarefasPendentes.innerHTML += `<li class="tarefa">
        <div class="not-done" onclick="atualizarTarefa(${dados.id},true)"></div>
        <div class="descricao">
          <p class="nome">${dados.description}</p>
          <p class="timestamp"> Criada em: ${dataBR}</p>
        </div>
      </li>`;
    });
}

bot.addEventListener("click", (evento) => {
  evento.preventDefault();
  criarTaf();
});


function atualizarTarefa(id, completed){

  const URLApi = `https://ctd-fe2-todo-v2.herokuapp.com/v1/tasks/${id}`;
  const jwt = localStorage.getItem("token");
  const configuracaoAtualizar = {
    method: "PUT",
    body: "",
    headers: {
      "content-type": "application/json",
      Authorization: jwt,
    },

  };
  configuracaoAtualizar.body = JSON.stringify({completed});


  fetch(URLApi, configuracaoAtualizar).then((response) => response.json())
  .then(() => {
    listaTaf();
  })
}
function removerTarefa(id){

  const URLApi = `https://ctd-fe2-todo-v2.herokuapp.com/v1/tasks/${id}`;
  const jwt = localStorage.getItem("token");
  const configuracaoAtualizar = {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      Authorization: jwt,
    },

  };
 
  fetch(URLApi, configuracaoAtualizar).then((response) => response.json())
  .then(() => {
    listaTaf();
  })
}