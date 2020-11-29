const insertName = document.querySelector(".insert-name");
const input = insertName.querySelector(".input");
const h1 = document.querySelector(".h1");
const USER_LS = "currentuser"

function saveName(text){
    localStorage.setItem(USER_LS, text);    
}

function handleSubmit(a){
   
    h1.classList.add("none");
    input.classList.add("none");
    h1.classList.add("showing")
    h1.innerHTML = `Hello ${a}`;
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

function init(){
    loadName();    
}
init();