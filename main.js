var mouseevents = "";
var last_x, last_y;
var canvas = document.getElementById("myCanvas");
var color = "black";
var width = 2;
var ctx = canvas.getContext("2d");
canvas.addEventListener("mousedown", mymousedown);

function mymousedown(e) {
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
    mouseevents = "mousedown";

}
canvas.addEventListener("mousemove", mymousemove); //this command is used to add events on the canvas
function mymousemove(e) {

    var currentX = e.clientX - canvas.offsetLeft;
    var currentY = e.clientY - canvas.offsetTop;
    if (mouseevents == "mousedown") {

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.moveTo(last_x, last_y);
        ctx.lineTo(currentX, currentY);
        ctx.stroke();

    }
    last_x = currentX;
    last_y = currentY;

}
canvas.addEventListener("mouseup", mymouseup);

function mymouseup(e) {

    mouseevents = "mouseUP";

}
canvas.addEventListener("mouseleave", mymouseleave);

function mymouseleave(e) {

    mouseevents = "mouseLEAVE";

}

function cleararea() {

     console.log("clear");
     ctx.clearRect(0, 0, canvas.width, canvas.height);
     console.log("clear");

}