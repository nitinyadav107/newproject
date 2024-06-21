const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        const color = e.target.id;
        if (color === "violet") {
            body.style.backgroundColor = color;
        }
        if (color === 'blue') {
            body.style.backgroundColor = color;
        }
        if (color === 'yellow') {
            body.style.backgroundColor = color;
        }
        if (color === 'green') {
            body.style.backgroundColor = color;
        }
    });
});
