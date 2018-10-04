let color = "black";
let strokeWidth = document.querySelector('.slider').value;
let canvas = document.getElementById('can');
let ctx = canvas.getContext("2d");
let w = canvas.width;
let h = canvas.height;
let prevX;
let prevY;
let currX;
let currY;
let flag = false;
const slider = document.querySelector('.slider');

slider.oninput = function () {
    strokeWidth = document.querySelector('.slider').value;
    document.getElementById('slider-value').value = this.value;
}

document.addEventListener('click', function (e) {
    if (e.target.classList.contains("color-picker")) {
        color = e.target.dataset.color;
    }
});

document.querySelector('#clear').addEventListener('click', function (e) {
    const option = confirm("Do you want to clear your canvas?");

    if(option){
        window.location.reload();
    }
});

document.querySelector('#eraser').addEventListener('click', function (e) {
    if (document.querySelector('#eraser').checked === true) {
        color = 'white';
        strokeWidth = 10;
    } else {
        color = 'black';
        strokeWidth = 2;
    }
});

canvas.addEventListener('mousedown', function (e) {
    currX = e.clientX - canvas.offsetLeft;
    currY = e.clientY - canvas.offsetTop;
    draw('down', e);
});

canvas.addEventListener('mousemove', function (e) {
    draw('move', e);
});

canvas.addEventListener('mouseup', function (e) {
    draw('up', e);
});

canvas.addEventListener('mouseout', function (e) {
    draw('out', e);
});

function draw(status, e) {
    if (status === 'down') {
        flag = true;
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.fillRect(currX, currY, strokeWidth, strokeWidth);
        ctx.closePath();
    }
    if (status === 'move') {
        if (flag === true) {
            prevX = currX;
            prevY = currY;
            currX = e.clientX - canvas.offsetLeft;
            currY = e.clientY - canvas.offsetTop;

            ctx.beginPath();
            ctx.moveTo(prevX, prevY);
            ctx.lineTo(currX, currY);
            ctx.strokeStyle = color;
            ctx.lineWidth = strokeWidth;
            ctx.stroke();
            ctx.closePath();
        }
    }
    if (status === 'up' || status === 'out') {
        flag = false;
    }
}


