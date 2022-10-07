const templateMarkup = /*html*/ `
  <link rel="stylesheet" href="public/components/pokemonContainer/styles.css" />
  <div class="wrapper">
    <h1><slot name="title">Pokemon Game in Template!</slot></h1>
    <h3><slot name="description">Describe me Template!</slot></h3>
  </div>

  <!-- I can ADD components in a component!!!! -->
  <card-view name="" image=""></card-view>
  <button id='get-card'>Get Card!</button>
`;

class PokemonContainer extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const template = document.createElement("template");
    template.innerHTML = templateMarkup;
    shadow.appendChild(template.content.cloneNode(true));

    shadow.querySelector("#get-card").addEventListener("click", async () => {
      const req = await fetch("http://0.0.0.0:1212/cards");
      const resp = await req.json();
      const randIdx = Math.floor(Math.random() * resp.data.length);
      const firstItem = resp.data[randIdx];
      console.log(firstItem);
      shadow.querySelector("card-view").setAttribute("name", firstItem.name);
      shadow
        .querySelector("card-view")
        .setAttribute("image", firstItem.images.small);
    });
  }
}

export default PokemonContainer;
