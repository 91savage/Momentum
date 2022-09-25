const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');

const link = document.querySelector('a');

function onLoginSubmit(event) {
    event.preventDefault(); // 브라우저가 기본 동작을 실행하지 못하게 막기
    console.log(event);
}

function handleLinkClick(event) {
    event.preventDefault();
    console.dir(event);
}

loginForm.addEventListener('submit', onLoginSubmit); //submit이 되었을 때만 onLoginSubmit 실행
link.addEventListener('click', handleLinkClick);

handleLinkClick();
