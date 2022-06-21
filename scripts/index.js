let btn = document.querySelector(".buttonAcessar")

let email = document.getElementById ("inputEmail")
let senha = document.getElementById ("inputPassword")

function inputEntries(){

    if (email.value !="" && senha.value != "")
    btn.disabled = false;
    
    else
    btn.disabled = true;

    
}

function btnDisabled(){

    btn.disbled = true;

}
