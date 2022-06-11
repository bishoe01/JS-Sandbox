const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
//form하면 submit- 새로고침

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
function onLoginSubmit(event) {
    event.preventDefault(); //서브밋 후에 새로고침되는 것을 막아줌
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); //로컬스토리지에 username을 저장 
    paintGreetings(username);
}

function paintGreetings(username){ 
    greeting.innerHTML = `Hello ${username}` //안의 텍스트 변경해주기 
    greeting.classList.remove(HIDDEN_CLASSNAME); //appear시켜주기 (아이디가 입력되었으므로)
} 

const savedUsername = localStorage.getItem(USERNAME_KEY); //유저네임 저장 (서브밋)

if(savedUsername === null) { //유저네임 인풋받은 것이 로컬스토리지에 없으면
    loginForm.classList.remove(HIDDEN_CLASSNAME); //서브밋 받아주는 폼을 appear시켜주기
    loginForm.addEventListener("submit", onLoginSubmit); //닉네임 입력받기
}
else {
    paintGreetings(savedUsername);
}