const canvas = document.querySelector("#myCanvas");
canvas.width = 400;
canvas.height = 400; 
canvas.style.border = "1vw solid black";

const ctx = canvas.getContext("2d");

// ctx.scale(2,2);
// ctx.translate(70,45);
// ctx.rotate(Math.PI/4);

// we translated the canvas and not the object.
// ctx.strokeRect(10,10,100,75);
// ctx.translate(100, 0);
// ctx.translate(0, canvas.height);
// ctx.scale(1,-1);
// ctx.translate(0, 240)

// ctx.beginPath();
// ctx.moveTo(60,60);
// ctx.lineTo(20,140);
// ctx.lineTo(100, 140);
// ctx.closePath();

// ctx.lineWidth = 3;
// ctx.stroke();


function drawCircle(x, y, radius, color, width){
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2*Math.PI);
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.stroke();
    ctx.closePath();
}

function drawPartialCircle(x, y, radius, fillColor, startAngle, endAngle){
    ctx.beginPath();
    ctx.arac(x, y, radius, startAngle, endAngle);
    ctx.fillStyle = fillColor;
    ctx.fill();
    ctx.closePath();
}

drawPartialCircle(200, 80, 70, "blue", -Math.PI/8, Math.PI/2);

let originX = 100,
    originY = 250;
    factorTop = 1,
    factorBottom = .5;
drawCircle(originX, originY, 70, "blue", 4);
drawCircle(originX + originX*factorTop, originY, 70, "black", 4);
drawCircle(originX + originX*factorTop*2, originY, 70, "red", 4);
drawCircle(originX + originX*factorBottom, originY*1.25, 70, "yellow", 4);
drawCircle(originX + originX*factorBottom*3, originY*1.25, 70, "green", 4);

