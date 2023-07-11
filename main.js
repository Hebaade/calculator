let input=document.getElementById('input');
let btn9=document.getElementById('bt9');
let btn8=document.getElementById('bt8');
let btn7=document.getElementById('bt7');
let btn6=document.getElementById('bt6');
let btn5=document.getElementById('bt5');
let btn4=document.getElementById('bt4');
let btn3=document.getElementById('bt3');
let btn2=document.getElementById('bt2');
let btn1=document.getElementById('bt1');
let btn0=document.getElementById('bt0');
let add=document.getElementById('add');
let sub=document.getElementById('sub');
let div=document.getElementById('div');
let mul=document.getElementById('mul');
let dot=document.getElementById('dot');
let equal=document.getElementById('equal');
let clear=document.getElementById('clear');
btn0.onclick=function(){
    input.value +=btn0.innerHTML
}
btn1.onclick=function(){
    input.value+=btn1.innerHTML
}
btn2.onclick=function(){
    input.value+=btn2.innerHTML
}
btn3.onclick=function(){
    input.value+=btn3.innerHTML
}
btn4.onclick=function(){
    input.value+=btn4.innerHTML
}
btn5.onclick=function(){
    input.value+=btn5.innerHTML
}
btn6.onclick=function(){
    input.value+=btn6.innerHTML
}
btn7.onclick=function(){
    input.value+=btn7.innerHTML
}
btn8.onclick=function(){
    input.value+=btn8.innerHTML
}
btn9.onclick=function(){
    input.value+=btn9.innerHTML
}
dot.onclick=function(){
    input.value+=dot.innerHTML
}
mul.onclick=function(){
    input.value+="*"
}
add.onclick=function(){
    input.value+=this.innerHTML
}
sub.onclick=function(){
    input.value+=this.innerHTML
}
div.onclick=function(){
    input.value+="/"
}
clear.onclick=function(){
    input.value=""
}
let deleteOne=document.getElementById("deleteone")
deleteOne.onclick=function(){
    input.value=input.value.toString().slice(0,-1)
}
equal.onclick=function(){
 input.value=eval(input.value)
}