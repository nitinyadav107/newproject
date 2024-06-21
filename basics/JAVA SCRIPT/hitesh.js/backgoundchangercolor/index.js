const randomColorChanger = function () {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let idSet;

let startColor = function () {
    function changeColor() {
        document.body.style.backgroundColor = randomColorChanger();
    }
    if (!idSet) {
        idSet = setInterval(changeColor, 1000);
    }
};

let stopColor = function () {
    clearInterval(idSet);
    idSet = null;
};

document.querySelector('#start').addEventListener('click', startColor);
document.querySelector('#stop').addEventListener('click', stopColor);

