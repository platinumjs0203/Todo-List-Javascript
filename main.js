// Greeting
const insertName = document.querySelector(".insert-name");
const input = insertName.querySelector(".input");
const h1 = document.querySelector(".h1");
const avatar = document.querySelector(".avatar")

const USER_LS = "currentuser"
function saveName(text){
    localStorage.setItem(USER_LS, text);    
}
function handleSubmit(a){
    input.classList.add("none");
    h1.classList.add("showing")
    h1.innerHTML = `Hello ${a}`;
    avatar.classList.add("none");
    clock.classList.add("showing");
    day.classList.add("showing");
}
function test(e){
    e.preventDefault();
    const currentValue = input.value;
    handleSubmit(currentValue);
    saveName(currentValue);
}
function submit(){
    insertName.addEventListener("submit", test);   
}
function loadName(){
    const currentuser = localStorage.getItem(USER_LS);
    if(currentuser === null){
        submit();
    } else {
        handleSubmit(currentuser);
    }   
}

//Clock
const clock = document.querySelector(".clock-js");
const clockTitle = clock.querySelector("h1");
const day = document.querySelector(".day-js")
const dayTitle = day.querySelector("h1");

function getTime(){
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();
    clockTitle.innerText = `${h < 10 ? `0${h}` : h}시 ${m < 10 ? `0${m}` : m}분 ${s < 10 ? `0${s}`: s}초`

    const day = d.getDate();
    const month = d.getMonth();
    dayTitle.innerText = `${month}월 ${day}일`
}

function init(){
    loadName();   
    getTime(); 
    setInterval(getTime);
}
init();