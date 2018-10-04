let color = "black";
let strokeWidth = 2;
let canvas = document.getElementById('can');
let ctx = canvas.getContext("2d");
let w = canvas.width;
let h = canvas.height; 
let prevX;
let prevY;
let currX;
let currY;
let flag = false;

canvas.addEventListener('mousedown', function(e){
    currX = e.clientX - canvas.offsetLeft;
    currY = e.clientY - canvas.offsetTop;
    draw('down', e);
});

canvas.addEventListener('mousemove', function(e){
    draw('move', e);
});

canvas.addEventListener('mouseup', function(e){
    draw('up', e);
});

canvas.addEventListener('mouseout', function(e){
    draw('out', e);
});

function draw(status, e){
    if (status === 'down'){
        flag = true;
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.fillRect(currX, currY, strokeWidth, strokeWidth);
        ctx.closePath();
    }
    if(status === 'move'){
       if(flag === true){
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
    if(status === 'up' || status === 'out'){
        flag = false;
    }
}


