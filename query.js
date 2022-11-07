
var containerall = document.getElementById('quindien');
var borderarr = ['50%','0'];
var blursarr = ['0','5px'];
var colorarr = ['#FF6868','#FF66D','#4472CA'];
var width = document.documentElement.clientWidth;
var Height = document.documentElement.clientHeight;
var count =50;
 function createElementrandom(){
  for(var i=0;i < count; i++)
  {
    var randomleft =  Math.floor(Math.random()*width);
    var randomtop =  Math.floor(Math.random()*Height);
    var color =  Math.floor(Math.random()*3);
    var boder =  Math.floor(Math.random()*2);
    var blur =  Math.floor(Math.random()*2);
    var widthElement =  Math.floor(Math.random()*5)+5;
    var timeAnimation =  Math.floor(Math.random()*8)+5;

    var div= document.createElement("div");
    div.style.backgroundColor = colorarr[color];
    div.style.position = 'absolute';
    div.style.width = widthElement +'px';
    div.style.height = widthElement +'px';
    div.style.marginLeft = randomleft +'px';  
    div.style.marginTop = randomtop +'px'; 
    div.style.borderRadius = borderarr[boder];
    div.style.filter = 'blur('+ blursarr[blur]+')';
    div.style.animation= 'gathui ' + timeAnimation + 's ease-in infinite';
    containerall.appendChild(div);
    }
 }
 createElementrandom();