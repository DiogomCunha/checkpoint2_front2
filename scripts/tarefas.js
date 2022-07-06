const userNameTarefas = document.querySelector("#userName");
let timeout;

function tempo() {
  timeout = setTimeout(receberUser, 50);
}

window.onload = function () {
  tempo();
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
