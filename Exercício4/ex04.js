


      textNode = document.createTextNode(
          `${people[i].mass}`
      );
      tdNode = document.createElement("td");
      tdNode.appendChild (textNode);
      trNode.appendChild(tdNode);


      textNode = document.createTextNode(
          `${people[i].hair_color}`
      );
      tdNode = document.createElement("td");
      tdNode.appendChild (textNode);
      trNode.appendChild(tdNode);


      textNode = document.createTextNode(
          `${people[i].skin_color}`
      );
      tdNode = document.createElement("td");
      tdNode.appendChild (textNode);
      trNode.appendChild(tdNode);


      textNode = document.createTextNode(
          `${people[i].eye_color}`
      );
      tdNode = document.createElement("td");
      tdNode.appendChild (textNode);
      trNode.appendChild(tdNode);

      
      tabela.appendChild(trNode);
  }
}

const fetchStarWarsPeople = () => {
  fetch(currentPage)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      people = data.results;
      nextPage = data.next;
      exibirListaStarWars();
    })
    .catch((err) => {
      console.log("Erro recebido: ", err);
    });
};
const fetchProxPag = () => {
  currentPage = nextPage;
  nextPage = null;
  fetchStarWarsPeople();
};

btFetch.onclick = fetchStarWarsPeople;
btProxPag.onclick = fetchProxPag;

exibirLista();


btFetch.onclick = fetchStarWarsPeople;
exibirListaStarWars();
