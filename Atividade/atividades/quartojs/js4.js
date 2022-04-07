let inserir = document.getElementById("nome");
let button = document.getElementById("botao");

function exibir(){
    let nome = inserir.value
    alert("Olá, " + nome + "!");
}

button.onclick = exibir;