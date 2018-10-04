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

document.addEventListener('mousedown', function(e){
    currX = e.clientX - canvas.offsetLeft;
    currY = e.clientY - canvas.offsetTop;
    draw('down', e);
});

document.addEventListener('mousemove', function(e){
    currX = e.clientX - canvas.offsetLeft;
    currY = e.clientY - canvas.offsetTop;
    draw('down', e);
})

function draw(status, color){
    if (status === 'down'){
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.fillRect(currX, currY, 10, 10);
        ctx.closePath();
    }
    if(status === 'move'){

    }
}


