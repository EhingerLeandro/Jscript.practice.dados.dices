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
dado1.innerHTML=one;
dado2.innerHTML=one;
tirar.addEventListener('click', (evento)=>{
    let valorDado1=Math.ceil(Math.random()*6);
    let valorDado2=Math.ceil(Math.random()*6);
    let valorResultado= valorDado1+valorDado2;
    switch (valorDado1) {
      case 1:
        answer1=one;
        break;
      case 2:
        answer1=two;
        break;
      case 3:
        answer1=three;
        break;
      case 4:
        answer1=four;
        break;
      case 5:
        answer1=five;
        break;
      case 6:
        answer1=six;
        break;
    }
    switch (valorDado2) {
      case 1:
        answer2=one;
        break;
      case 2:
        answer2=two;
        break;
      case 3:
        answer2=three;
        break;
      case 4:
        answer2=four;
        break;
      case 5:
        answer2=five;
        break;
      case 6:
        answer2=six;
        break;
    }

    dado1.innerHTML=answer1;
    dado2.innerHTML=answer2;
    resultado.innerHTML="Resultado = "+valorResultado;
})
