var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

context.translate(100, 100);


var copies = 10;
for (var i=1; i<copies; i++) {

    context.rotate(2 * Math.PI * 1/(copies-1));

    // Рисуем квадрат
    context.rect(0, 0, 60, 60);
}
context.strokeStyle = "#109bfc";
context.stroke();

/////////////////////////////////////////

canvas = document.getElementById("canvas2");

canvas.width=800;
context = canvas.getContext("2d");
context.textBaseline = "top";
context.font = "bold 20px Arial";
context.fillStyle = "black";
context.fillText("Кто рано встает, тот точно не я.", 10, 10);

context.font = "bold 40px Verdana,sans-serif";
context.lineWidth = 1;
context.strokeStyle = "red";
context.strokeText("Народная мудрость", 20, 50);

/////////////////////////////////////////

canvas = document.getElementById("canvas3");
canvas.width=800;

