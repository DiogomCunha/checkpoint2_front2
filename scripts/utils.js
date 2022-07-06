const mascaraEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
const mascaraPwd = /.{4,}/g;
const mascaraNome =
  /^([A-Za-záàäâãëéèêïìíîüùúûöòóôõçÁÀÄÂÃÉÈËÊÍÌÏÎÚÙÜÛÓÒÖÔÕÇ]){3,50}/;
const mascaraSobrenome =
  /^([A-Za-záàäâãëéèêïìíîüùúûöòóôõçÁÀÄÂÃÉÈËÊÍÌÏÎÚÙÜÛÓÒÖÔÕÇ]){3,50}/;

function ValidarInput(texto, mascara) {
  var resultado = texto.value.match(mascara);
  if (resultado != null) {
    return true;
  } else {
    return false;
  }
}

class Utils {
  constructor() {
    this.TIPO_FETCH = {
      Get: 0,
      Post: 1,
      Put: 2,
      Delete: 3,
    };
  }

  BaseFetch(link, dados, metodo = this.TIPO_FETCH.Get) {
    let headersFetch = {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(dados),
    };
    switch (metodo) {
      case this.TIPO_FETCH.Post:
        headersFetch.method = "POST";
        break;
      case this.TIPO_FETCH.Put:
        headersFetch.method = "PUT";
        break;
      case this.TIPO_FETCH.Delete:
        headersFetch.method = "DELETE";
        break;
      default:
        break;
    }

    return fetch(link, headersFetch)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw res;
        }
      })
      .then(function (resp) {
        return resp;
      });
  }
}
