const h1 = document.querySelector('h1');

function changeTitle() {
    h1.textContent = 'Olá, Scratch!';
}

setInterval(changeTitle, 2000);