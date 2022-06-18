let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let valorElement = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerpassword = document.querySelector("#container-password");

let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
let novaSenha = "";

valorElement.innerHTML = sliderElement.value;

slider.oninput = function () 
{
    valorElement.innerHTML = this.value;
}

function generatePassword() 
{
    let pass = "";
    for (let i = 0, n = charset.length; i < sliderElement.value; ++i) 
    {
        pass += charset.charAt(Math.floor(Math.random() * n));

    }
    containerpassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;

}

function copyPassword()
{
    alert("Senha copiada")
    navigator.clipboard.writeText(novaSenha);
}


