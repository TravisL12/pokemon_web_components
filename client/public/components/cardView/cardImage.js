const templateMarkup = /*html*/ `
  <link rel="stylesheet" href="public/components/cardView/styles.css" />
  <div id="image-container"></div>
`;

class CardImage extends HTMLElement {
  static get observedAttributes() {
    return ["img-src"];
  }

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    const template = document.createElement("template");
    template.innerHTML = templateMarkup;

    const img = document.createElement("img");
    img.src = this.getAttribute("img-src");
    template.content.getElementById("image-container").appendChild(img);
    this.shadow.appendChild(template.content.cloneNode(true));
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === "img-src" && newValue) {
      this.shadow.querySelector("img").setAttribute("src", newValue);
    }
  }
}

export default CardImage;
