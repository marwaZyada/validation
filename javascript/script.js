var inpt = document.querySelectorAll("input:not([type='radio'])")
console.log(inpt[inpt.length - 1])
let fname = document.getElementById("fname")
let lbFname = document.getElementById("lb-fname")
let lname = document.getElementById("lname")
let lbLname = document.getElementById("lb-lname")
let mail = document.getElementById("mail")
let lbMail = document.getElementById("lb-mail")
let phone = document.getElementById("phone")
let lbPhone = document.getElementById("lb-phone")
let pass = document.getElementById("pass")
let lbPass = document.getElementById("lb-pass")
let lbConfPass = document.getElementById("lb-conf-pass")
let confPass = document.getElementById("conf-pass")

let radiobtn = document.querySelectorAll("input[type='radio']")

let btn = document.querySelectorAll("button")

let fnameValide = false;
let lnameValide = false;
let mailValide = false;
let phoneValide = false;
let passValide = false;
let confPassValide = false;
let radioValide = false
let dateValide = false




function handleDisabled(inp1) {
    inpt.forEach((el) => {

        el.disabled = true;
        inp1.disabled = false;


    })
}
window.onload = () => {
    handleDisabled(fname)
}


fname.onblur = () => {
    let name = fname.value.trim();


    if (name.indexOf(" ") == -1 && name != "" && isNaN(name)) {

        lbFname.innerHTML = `<p class="text-success m-0"><span class="material-symbols-outlined text-success">
        new_releases </span>  valide username</p>`
        fnameValide = true;
        handleDisabled(lname)
        lname.focus();
    } else {
        lbFname.innerHTML = `<p class='text-danger m-0'>please enter valide username <span class='material-symbols-outlined text-danger'>error</span></p>`



    }
}
lname.onblur = () => {
    let namelast = lname.value.trim();


    if (namelast.indexOf(" ") == -1 && namelast != "" && isNaN(namelast)) {

        lbLname.innerHTML = `<p class="text-success m-0"><span class="material-symbols-outlined text-success">
        new_releases </span>  valide lastname</p>`;
        lnameValide = true;
        handleDisabled(mail)
        mail.focus();
    } else {
        lbLname.innerHTML = `<p class='text-danger m-0'>please enter valide lastname <span class='material-symbols-outlined text-danger'>error</span></p>`


    }
}
mail.onblur = () => {
    let userMail = mail.value.trim();
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (userMail.match(mailformat)) {

        lbMail.innerHTML = `<p class="text-success m-0"><span class="material-symbols-outlined text-success">
        new_releases </span>  valide mail</p>`;
        mailValide = true
        handleDisabled(phone)
        phone.focus();
    } else {
        lbMail.innerHTML = `<p class='text-danger m-0'>please enter valide mail <span class='material-symbols-outlined text-danger'>error</span></p>`

        phone.disabled = true


    }
}
phone.onblur = () => {
    var phoneno = /^\d{10}$/;
    if ((phone.value.match(phoneno))) {
        lbPhone.innerHTML = `<p class="text-success m-0"><span class="material-symbols-outlined text-success">
        new_releases </span>  valide phone number</p>`;
        phoneValide = true;
        handleDisabled(pass);
        pass.focus();
    } else {
        lbPhone.innerHTML = `<p class='text-danger m-0'>please enter valide phone number <span class='material-symbols-outlined text-danger'>error</span></p>`


    }
}
pass.onblur = () => {
    if (pass.value.length >= 4 && pass.value.includes(" ") != true && pass.value != "") {

        lbPass.innerHTML = `<p class="text-success m-0"><span class="material-symbols-outlined text-success">
        new_releases </span>  valide password</p>`;
        passValide = true;
        handleDisabled(confPass);
        confPass.focus();
    } else {
        lbPass.innerHTML = `<p class='text-danger m-0'>please enter valide password <span class='material-symbols-outlined text-danger'>error</span></p>`


    }
}
confPass.onblur = () => {
    if (confPass.value.length >= 4 && confPass.value.includes(" ") != true && confPass.value != "" && confPass.value === pass.value) {

        lbConfPass.innerHTML = `<p class="text-success m-0"><span class="material-symbols-outlined text-success">
        new_releases </span>  valide password</p>`;
        confPassValide = true;




        handleDisabled(inpt[inpt.length - 1]);


    } else {
        lbConfPass.innerHTML = `<p class='text-danger m-0'>please enter valide password <span class='material-symbols-outlined text-danger'>error</span></p>`


    }
}
let genderVal = "";


for (let i = 0; i < 2; i++) {
    radiobtn[i].onchange = () => {
        genderVal = radiobtn[i].value;
        console.log(genderVal);

    }
}


radioValide = true;



(inpt[inpt.length - 1]).onchange = () => {

    let dateValue = inpt[inpt.length - 1].value
    console.log(dateValue)
    dateValide = true
}

btn[0].addEventListener("click", () => { window.location.reload() });
btn[1].addEventListener("click", () => {
    if (fnameValide == true && lnameValide == true && mailValide == true && passValide == true && confPassValide == true && radioValide == true && dateValide == true) {
        window.location.href = 'login.html'
    }
})