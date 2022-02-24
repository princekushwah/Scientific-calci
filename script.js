function dis(val) {          // get value in input
  const display = document.getElementById("result");
  display.value += val;

  // if(result.value.text ===)   
}

function res() {                          // evaluate button 
  const display = document.getElementById("result");
  let x = display.value;
  let y = eval(x);
  display.value = y;
}

function sin(value) {       // value in sin(radian)
  result.value += value;
  const display = value;
  let x = Math.sin(display);
  // console.log(x);
  return (display.value = x);
}
 
function cos(value) {            // value in cos(radian)
  result.value += value;
  const display = value;
  let x = Math.cos(display);
  // console.log(x);
  return (display.value = x);
}
 
function resin(value){          // value in resin(rad  const display = document.getElementById("result");

  const display = value;
  let x = 392.9 * display;
  return display.value = x
}
 
function ac() {                               // clear all button 
  const display = document.getElementById("result");
  display.value = "";
}

function c(){                               // last digit clear button
  let a = document.getElementById("result");
  let b = a.value.slice(0, length -1 );                                 
  return a.value =b
  
}

function dsin(value){       // value in sin(degree)
  result.value += value;
  const display = value;
  let x= value
  let pi=Math.PI
  let y= Math.sin(x*pi/180);
  
  return display.value = y;
}
                                                                                                                                                                                                                             
function dcos(value) {           // value in cos(degree)
  result.value += value;
  const display = value;
  let x= value
  let pi = Math.PI;
  let b = Math.cos((x * pi) / 180);
   return display.value = b

}

function clickdegree(){           // function for sin/cos button for degree
  var a = document.getElementById('d');
  a.style.display="block"
 
  var b = document.getElementById('r');
  b.style.display = "none"
}
function clickradian(){
  var a = document.getElementById('r');
  a.style.display="block"

  var b = document.getElementById('d');
  b.style.display = "none"
}

function pi(value){    // button for pi value
 
  return result.value += value
}

// function check(){
//   let a = document.getElementById("result");
//   a.setAttribute("type","number");

// }