const templateMarkup = `
  <link
    rel="stylesheet"
    href="public/components/cardView/styles.css"
  />
  <div class="card-wrapper">
    <h1><slot name="pokemon-name">Pikachu!</slot></h1>
  </div>
`;

class CardView extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const template = document.createElement("template");
    template.innerHTML = templateMarkup;
    shadow.appendChild(template.content.cloneNode(true));
  }
}

export default CardView;
