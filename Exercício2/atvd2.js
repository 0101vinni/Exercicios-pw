let linha = document.getElementById("numero");
let col = document.getElementById("coluna");
let min = document.getElementById("minimo");
let max = document.getElementById("maximo");
let button = document.getElementById("botao");
let tab = document.getElementById("tabela");


function gerar(){
    if(linha == "" || col.value == "" || min.value == "" || max.value == "") {
        alert("digite os valores ");
     } else {
     tabela.innerHTML = "";
     for (let contador = 0; contador<linha.value; contador++){
         if (contador % coluna.value !=0){
             tabela.innerHTML += (Math.floor(Math.random()*(max.value - min.value +1))+ parseInt(min.value)) + "|";
         }else{
            tabela.innerHTML += "\n"
            tabela.innerHTML += (Math.floor(Math.random()* (max.value - min.value + +1))+parseInt(min.value)) + "|";
         }
     }  
     linha.value = "";
     col.value = "";
     max.value = "";
     min.value = "";
     linha.focus();
    }
 }
 button.onclick = gerar;