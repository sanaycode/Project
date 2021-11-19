var mouseEvent="";
var canvas=document.getElementById("myCanvas");
var ctx= canvas.getContext("2d");
var color= document.getElementById("color");
var widthOfLine=document.getElementById("width_of_line");
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color= document.getElementById("color");
    widthOfLine=document.getElementById("width_of_line");
    var mouseEvent="mousedown";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    color= document.getElementById("color");
    widthOfLine=document.getElementById("width_of_line");
    var mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    color= document.getElementById("color");
    widthOfLine=document.getElementById("width_of_line");
    var mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    var current_position_of_x=e.clientX-canvas.offsetLeft;
    var current_position_of_y=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=widthOfLine;
        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(current_position_of_x, current_position_of_y);
        ctx.stroke();
    }

    var last_position_of_x=current_position_of_x;
    var last_position_of_y=current_position_of_y;
}
canvas.addEventListener("touchdown", my_touchdown);
function my_touchdown(e){
    color= document.getElementById("color");
    widthOfLine=document.getElementById("width_of_line");
    var touchEvent="touchdown";
}
canvas.addEventListener("touchup", my_touchup);
function my_touchup(e){
    color= document.getElementById("color");
    widthOfLine=document.getElementById("width_of_line");
    var touchEvent="touchup";
}
canvas.addEventListener("touchleave", my_touchleave);
function my_touchleave(e){
    color= document.getElementById("color");
    widthOfLine=document.getElementById("width_of_line");
    var touchEvent="touchleave";
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){
    var current_position_of_touch_x=e.clientX-canvas.offsetLeft;
    var current_position_of_touch_y=e.clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=widthOfLine;
    ctx.moveTo(last_position_of_touch_x, last_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();
    var last_position_of_touch_x=current_position_of_touch_x;
    var last_position_of_touch_y=current_position_of_touch_y;
}