let dado1=document.getElementById ('dado1');
let dado2=document.getElementById ('dado2');
let tirar= document.querySelector('#tirar');
let resultado= document.getElementById("resultado");

let one= ` . `;
let two= `. .`;
let three= `. <br> . <br> .`;
let four=`. .<br>. .`;
let five=`. .<br> . <br>. .`;
let six =`. .<br>. .<br>. .`;

let answer1="";
let answer2="";
let counter = 6;
let rollingDices;

dado1.innerHTML=one;
dado2.innerHTML=one;

const switchFunc = (valor) =>{
  let answer='';
  switch (valor) {
    case 1:
      answer=one;
      break;
    case 2:
      answer=two;
      break;
    case 3:
      answer=three;
      break;
    case 4:
      answer=four;
      break;
    case 5:
      answer=five;
      break;
    case 6:
      answer=six;
      break;
  }
  return answer;
}

function intervalFunc (){
  tirar.disabled=true;

  let valorDado1=Math.ceil(Math.random()*6);
  let valorDado2=Math.ceil(Math.random()*6);
  let valorResultado= valorDado1+valorDado2;

  answer1 = switchFunc(valorDado1);
  answer2 = switchFunc(valorDado2);

  dado1.innerHTML=answer1;
  dado2.innerHTML=answer2;
  resultado.innerHTML= counter <=1 ? "Resultado = "+valorResultado: 'Loading...';

  counter -= 1;
  if(counter <=0) {
    clearInterval(rollingDices)
    tirar.disabled =false;
    counter=6;
  }
}

const rollDices = ()=>{
   rollingDices = setInterval(intervalFunc, 200);
}

tirar.addEventListener('click', rollDices )



