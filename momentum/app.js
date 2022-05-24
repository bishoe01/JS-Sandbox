const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginbutton = loginForm.querySelector("button");


function handleLoginButton(){
    console.dir(loginInput.value);
}
loginbutton.addEventListener("click", handleLoginButton);