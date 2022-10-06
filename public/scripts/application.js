import PokemonContainer from "../components/pokemonContainer/index.js";
import CardView from "../components/cardView/index.js";
import CardImage from "../components/cardView/cardImage.js";

// Define all elements here
document.addEventListener("DOMContentLoaded", () => {
  customElements.define("card-image", CardImage);
  customElements.define("card-view", CardView);
  customElements.define("pokemon-container", PokemonContainer);
});
