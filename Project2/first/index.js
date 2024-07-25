
const randomColor = function () {
    let hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;

}
let interval;
const startChangingBg = function () {
    if (!interval) {
        interval = setInterval(changeColor, 1000)
    }



    function changeColor() {
        document.body.style.backgroundColor = randomColor();
    }

}
const stopChangingBg = function () {
    clearInterval(interval);
    interval = null;
}

document.getElementById("start").addEventListener("click", startChangingBg)
document.getElementById("stop").addEventListener("click", stopChangingBg)