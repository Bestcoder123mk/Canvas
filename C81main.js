 canvas=document.getElementById("Mycan");
 ctx=canvas.getContext("2d");
 colour="Blue";
ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",Mymousedown);
function Mymousedown(e){
    colour=document.getElementById("Colour").value;
    console.log(colour)
     mouseX =e.clientX-canvas.offsetLeft;
     mouseY =e.clientY-canvas.offsetTop;
    console.log("X ="+mouseX+"Y ="+mouseY)
    circle(mouseX,mouseY);
}
function circle(mouseX,mouseY){
    ctx.beginPath();
    ctx.strokeStyle=colour;
    ctx.lineWidth=2;
    ctx.arc(mouseX,mouseY,40,0,2*Math.PI);
    ctx.stroke();
}
