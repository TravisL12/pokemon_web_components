import PokemonContainer from "../components/pokemonContainer/index.js";
import CardView from "../components/cardView/index.js";

// Define all elements here
document.addEventListener("DOMContentLoaded", () => {
  customElements.define("card-view", CardView);
  customElements.define("pokemon-container", PokemonContainer);
});
