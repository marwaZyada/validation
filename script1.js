let userName = document.getElementById("username")
let password = document.getElementById("pass")
let showPass = document.getElementById("show-pass")
let error = document.getElementById("error")
let btnLog = document.getElementById("log")
let createNewAcount = document.getElementById("new-account")
let passvalide = false;
let show = false
console.log(password.value)

password.onblur = () => {
    if (password.value.length < 6 || password.value == "") {
        error.style.color = "red";
        error.innerHTML = "password must be mor than 6 characters"
    } else {
        error.style.color = "#0d6efd";
        error.innerHTML = "good password";
        passvalide = true;
    }
}
showPass.onclick = () => {
    if (showPass.checked == true) {
        password.type = "text";
    } else {
        password.type = "password"
    }
}

btnLog.onclick = () => {
    if (userName.value != "" && passvalide == true) {
        window.location.href = "welcome.html";
        console.log("welcome")
    } else {
        console.log("error")
    }
}
createNewAcount.onclick = () => {
    document.forms.location.href = "creatNewAccount.html";

}