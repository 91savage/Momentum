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

function handleWindowResize() {
    document.body.style.backgroundColor = 'tomato';
}

function handleWindowCopy() {
    alert('copier');
}

function handleWindowOffline() {
    alert('SOS!');
}

function handleWindowOnline() {
    alert('all Good!');
}

// title.addEventListener('click', handleTitleClick);
title.onclick = handleTitleClick;
// title.addEventListener('mouseenter', handleMouseEnter);
title.onmouseenter = handleMouseEnter;
// title.addEventListener('mouseleave', handleThandleMouseLeave);
title.onmouseleave = handleThandleMouseLeave;

// addEventListener 는 .removeEventListener로 나중에 삭제 할 수 있기 때문에
// addEventListener 를 더 선호함

window.addEventListener('reseize', handleWindowResize);
window.addEventListener('copy', handleWindowCopy);
window.addEventListener('offline', handleWindowOffline);
window.addEventListener('online', handleWindowOnline);
