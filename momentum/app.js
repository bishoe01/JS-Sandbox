const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");  
const loginbutton = loginForm.querySelector("button");


function handleLoginButton(){
    const username = loginInput.value;
    if(username === ""){
        alert("Please enter your username");
    }
    else if(username.length>15){ 
        alert("Your name is too long");
    }
    else {
        console.log("Hello" , loginInput.value);
    }
}
loginbutton.addEventListener("click", handleLoginButton);