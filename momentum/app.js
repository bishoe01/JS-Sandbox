const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

//form하면 submit- 새로고침

function onLoginSubmit(event) {
    event.preventDefault();
    console.log(event);
}

loginForm.addEventListener("submit", onLoginSubmit);
