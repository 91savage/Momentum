// const loginForm = document.querySelector('#login-form');
// const loginInput = document.querySelector('#login-form input');

// function onLoginSubmit(event) {
//     event.preventDefault();
//     // const username = loginInput.value;
//     console.log(loginInput.value);
// }
// loginForm.addEventListener('submit', onLoginSubmit); //submit이 되었을 때만 onLoginSubmit 실행

const title = document.querySelector('div.helo:first-child h1');

console.dir(title);

function handleTitleClick() {
    title.style.color = 'blue';
}
function handleMouseEnter() {
    title.innerText = 'mouse is here!';
}
function handleMouseLeave() {
    title.style.color = 'mouse is gone!';
}

title.addEventListener('click', handleTitleClick);
title.addEventListener('mouseenter', handleMouseEnter);
title.addEventListener('mouseleave', handleThandleMouseLeave);
