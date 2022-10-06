const templateMarkup = `
  <link
    rel="stylesheet"
    href="public/components/pokemonContainer/styles.css"
  />
  <div class="wrapper">
    <h1><slot name="title">Pokemon Game in Template!</slot></h1>
    <h3><slot name="description">Describe me Template!</slot></h3>
  </div>

  <!-- I can ADD components in a component!!!! -->
  <card-view><span slot="pokemon-name">Bulbasuar!</span></card-view>
`;

class PokemonContainer extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const template = document.createElement("template");
    template.innerHTML = templateMarkup;
    shadow.appendChild(template.content.cloneNode(true));
  }
}

export default PokemonContainer;
