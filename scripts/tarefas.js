let userNameTarefas = document.querySelector("#userName");
function userName() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    userNameTarefas.innerHTML = `${user.nome} ${user.sobrenome[0]}`;
    console.log(user, userNameTarefas);
  }
}

userName();

