const templateMarkup = /*html*/ `
  <link rel="stylesheet" href="public/components/cardView/styles.css" />
  <div class="card-wrapper">
    <h1><slot name="pokemon-name">Pikachu!</slot></h1>
    <card-image
      img-src="https://www.freeiconspng.com/thumbs/pikachu-transparent/pikachu-transparent-hd-1.png"
    ></card-image>
  </div>
`;

class CardView extends HTMLElement {
  static get observedAttributes() {
    return ["name", "image"];
  }

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    const template = document.createElement("template");
    template.innerHTML = templateMarkup;
    this.shadow.appendChild(template.content.cloneNode(true));
    this.shadow.addEventListener("slotchange", (event) => {
      // console.log(event.target.name, "slot changed!");
    });
  }

  connectedCallback() {
    // console.log("CardView: connected");
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === "name" && newValue) {
      this.shadow.querySelector('slot[name="pokemon-name"]').textContent =
        newValue;
    }

    if (attrName === "image" && newValue) {
      this.shadow.querySelector("card-image").setAttribute("img-src", newValue);
    }
  }
}

export default CardView;
