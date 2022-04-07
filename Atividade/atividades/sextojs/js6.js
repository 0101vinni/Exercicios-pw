let nome = document.getElementById("nome");
let sobrenome = document.getElementById("sobrenome");
let button = document.getElementById("button");

function exibir(){
    if(nome.value == '' || sobrenome.value == ''){
        alert("insira os dados nos campos vazios!");
    }else{
        alert("Olá, " + nome.value + " " + sobrenome.value + "!")
        nome.value = "";
        sobrenome.value = "";
        nome.focus();
    }
}

button.onclick = exibir;