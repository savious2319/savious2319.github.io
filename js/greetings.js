const login = document.getElementById('login-form');
const userName = document.getElementById('user');
const greeting = document.getElementById('greeting');
const HIIDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'userName';

function onLoginSubmit(e){
    e.preventDefault();
    login.classList.add(HIIDEN_CLASSNAME);
    localStorage.setItem('USERNAME_KEY', userName.value);
    paintGreeting(userName.value);
}

function paintGreeting(userName){
    greeting.classList.remove(HIIDEN_CLASSNAME);
    greeting.innerText = `Hello ${userName}`;
}

const savedUserName = localStorage.getItem('USERNAME_KEY');

if(savedUserName === null){
    login.classList.remove(HIIDEN_CLASSNAME); 
    login.addEventListener('submit', onLoginSubmit);
}else{
    paintGreeting(savedUserName);
}