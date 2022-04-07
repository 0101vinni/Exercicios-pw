let button = document.getElementById("button");
let nome = document.getElementById("nome");
let sobrenome = document.getElementById("sobrenome");

function exibir(){
    alert("Olá, " + nome.value + sobrenome.value + "!");
}

button.onclick = exibir;