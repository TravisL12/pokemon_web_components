const templateMarkup = `
  <link
    rel="stylesheet"
    href="public/components/cardView/styles.css"
  />
  <div id="image-container"></div>
`;

class CardImage extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const template = document.createElement("template");
    template.innerHTML = templateMarkup;

    const img = document.createElement("img");
    img.src = this.getAttribute("imgSrc");
    template.content.getElementById("image-container").appendChild(img);
    shadow.appendChild(template.content.cloneNode(true));
  }
}

export default CardImage;
