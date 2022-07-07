const userNameTarefas = document.querySelector("#userName");
const listaTarefasPendentes = document.querySelector("#tarefasPendentes");
const listaTarefasConcluidas = document.querySelector("#tarefasTerminadas");
const createTask = document.querySelector("submitCriar");

window.onload = function () {
  receberUser();
  listaTaf();
};

function receberUser() {
  const URLApi = "https://ctd-todo-api.herokuapp.com/v1/users/getMe";
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
        listaTarefasConcluidas.innerHTML = `<li class="tarefa">
                <div class="not-done"
                onclick="RemoverTarefa(${task.id})></div>
                <div class="descricao">
                  <p class="nome">${task.description}</p>
                  <p class="timestamp"> "Criada em:" ${dataBR}</p>
                </div>
              </li>`;
      } else {
        listaTarefasPendentes.innerHTML = `<li class="tarefa">
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
  const URLApi = "https://ctd-todo-api.herokuapp.com/v1/tasks";
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

function criarTarefa() {
  const dataFor = newDate(data.createdAt).toLocaleDateString("pt-BR", 
  
  {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }

  if (createTask.innerHTML =
    `<li class="tarefa">
            <div class="not-done"></div>
           <div class="descricao">
             <p class="nome">${data.description}</p>
             <p class="timestamp"> "Criada em:" ${dataFormatada}</p>
          </div>
         </li>`

 
  
  );
}
