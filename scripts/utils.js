const mascaraEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
const mascaraPwd = /.{4,}/g;
const mascaraNome = /^([A-Za-záàäâãëéèêïìíîüùúûöòóôõçÁÀÄÂÃÉÈËÊÍÌÏÎÚÙÜÛÓÒÖÔÕÇ]){3,50}/;
const mascaraSobrenome = /^([A-Za-záàäâãëéèêïìíîüùúûöòóôõçÁÀÄÂÃÉÈËÊÍÌÏÎÚÙÜÛÓÒÖÔÕÇ]){3,50}/;

function ValidarInput(texto, mascara) {
  var resultado = texto.value.match(mascara);
  if (resultado != null) {
    return true;
  } else {
    return false;
  }
}
