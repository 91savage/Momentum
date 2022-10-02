const images = [
    'france-paris.jpg',
    'hawaii-usa.jpg',
    'landscape-austria.jpg',
    'transport-melbourne.jpg',
];

const chosenImage = images[[Math.floor(Math.random() * images.length)]];

const bgImage = document.createElement('img');

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
