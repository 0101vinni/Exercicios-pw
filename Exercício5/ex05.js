Parse.serverURL = "https://parseapi.back4app.com"; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
  "Z2EoEH6h9CzEauC7h3Me4sQoK9qPLufaNRTocefl", // This is your Application ID
  "GeAcu44zlUfD1b0T3wGQtS9O1IVZc1rJd4BiHlvv" // This is your Javascript key
);

let pessoas = [];
const lista = document.getElementById("lista");

function gerarLista() {
  lista.innerHTML = "";
  for (let i = 0; i < pessoas.length; ++i) {
    // lista.innerHTML += `<li>${i}</li>`;
    const li = document.createElement("li");
    const txt = document.createTextNode(
      `Nome: ${pessoas[i].nome} - Idade: ${pessoas[i].idade} - Altura: ${pessoas[i].altura}  Time: ${pessoas[i].Time}`
    );
    li.appendChild(txt);
    lista.appendChild(li);
  }
}

const fetchPessoas = async () => {
  const Pessoa = Parse.Object.extend("Pessoa");
  const query = new Parse.Query(Pessoa);
  try {
    const results = await query.find();
    pessoas = [];
    for (const object of results) {
      const nome = object.get("nome");
      const idade = object.get("idade");
      const altura = object.get("altura");
      const Time = object.get("Time");
      pessoas.push({ nome, idade, altura, Time});
    }
    gerarLista();
  } catch (error) {
    console.error("Error while fetching Pessoa", error);
  }
};

const fetchPessoas2 = () => {
  const Pessoa = Parse.Object.extend("Pessoa");
  const query = new Parse.Query(Pessoa);
  query
    .find()
    .then((results) => {
      pessoas = [];
      for (const object of results) {
        const nome = object.get("nome");
        const idade = object.get("idade");
        const altura = object.get("altura");
        const Time = object.get("Time");
        pessoas.push({ nome, idade, altura, Time });
      }
      gerarLista();
    })
    .catch((error) => {
      console.error("Error while fetching Pessoa", error);
    });
};

fetchPessoas2();