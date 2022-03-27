let entrada = document.getElementById("inputInicial");
let botaoInicial = document.getElementById("arrayInicio");
let botaoFinal = document.getElementById("arrayFinal");
let botaoZerar = document.getElementById("zerar");
let entradaRemover = document.getElementById("inputRemover");
let botaoRemover = document.getElementById("botaoRemover")
const lista = document.getElementById("lista");

let valores = [];


function arrayFinal(){
   if(!isNaN(entrada.value)){
      if(entrada.value == ""){
         alert("Digite um valor valido!");
      }
      else{
         numero = entrada.value;
         valores.push(numero);
         entrada.value = "";
         entrada.focus();
         for(let contador = 0; contador <= 1; contador++){
            lista.innerHTML = "";
            for(let contador = 0; contador < valores.length; contador++){
               lista.innerHTML += '<li>' + valores[contador] + '</li>';
            }
         }
      }
   }
   else{
      alert("Digite um valor valido!");
      entrada.value = "";
      entrada.focus();
   }

   }


function arrayComeço(){
   if(!isNaN(entrada.value)){
      if(entrada.value == ""){
         alert("Digite um valor valido!")
      }
      else{
         numero = entrada.value;
         valores.unshift(numero);
         entrada.value = "";
         entrada.focus();
            for(let contador = 0; contador <= 1; contador++){
            lista.innerHTML = "";
            for(let contador = 0; contador < valores.length; contador++){
               lista.innerHTML += '<li>' + valores[contador] + '</li>';
            }
         }
      }
   }
   else{
      alert("Digite um valor valido!");
      entrada.value = "";
      entrada.focus();
   }

}

function limparArray(){
   for(let contador = valores.length + 1; contador > 0; contador--){
      valores.pop();
   }
   entrada.value = "";
   entrada.focus();
   lista.innerHTML = valores;
}

function limparIndice(){
   if(!isNaN(entradaRemover)){
      if(entradaRemover == ""){
         alert("Digite um valor valido!")
      }
      else{
         numero = entradaRemover;
         valores.unshift(numero);
         entradaRemover = "";
         entrada.focus();
            for(let contador = 0; contador <= 1; contador++){
            lista.innerHTML = "";
            for(let contador = 0; contador < valores.length; contador++){
               lista.innerHTML += '<li>' + valores[contador] + '</li>';
            }
         }
      }
   }
   else{
      alert("Digite um índice existente!");
      entradaRemover = "";
      entrada.focus();
   }
}

botaoInicial.onclick = arrayFinal;
botaoFinal.onclick = arrayComeço;
botaoZerar.onclick = limparArray;
botaoRemover.onclick = limparIndice;