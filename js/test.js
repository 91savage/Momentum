const xhr = new XMLHttpRequest();

xhr.open('POST', '/posts');
xhr.setRequestHeader('content-type', 'application/json');

const data = {
    id: 2,
    title: 'XMLHttpRequest',
    author: 'Jeremy',
};

xhr.send(JSON.stringify(data));
