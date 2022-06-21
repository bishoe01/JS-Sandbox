const clock = document.querySelector("#clock");
//Interval 



function getClock(){
    const date  = new Date(); //날짜 
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock,1000);