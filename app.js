const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';

const link = document.querySelector('a');

function onLoginSubmit(event) {
    event.preventDefault(); // 브라우저가 기본 동작을 실행하지 못하게 막기
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem('username', username);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener('submit', onLoginSubmit); //submit이 되었을 때만 onLoginSubmit 실행
