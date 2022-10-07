import { useState } from "react";
import axios from "axios";
import "./App.styles.ts";
import { SCardList } from "./App.styles";
import { ICard } from "./tcgTypes/card";

function App() {
  const [nameQuery, setNameQuery] = useState<string>("");
  const [cards, setCards] = useState<ICard[]>([]);

  const fetchCards = async () => {
    const req = await axios.get(`http://0.0.0.0:1212/cards`, {
      params: { name: nameQuery },
    });
    if (req.data.results) {
      setCards(req.data.results);
    }
  };

  return (
    <div>
      <h2>Welcome to Pokemon Card Search!</h2>
      <div>
        <input
          type="text"
          placeholder="Name search"
          value={nameQuery}
          onChange={(event) => setNameQuery(event.target.value)}
        />
        <button onClick={fetchCards}>Get card!</button>
      </div>
      <SCardList>
        {cards.map((card) => {
          return (
            <div key={card.id}>
              <div>{card.name}</div>
              <div>
                <img src={card.images.small} />
              </div>
            </div>
          );
        })}
      </SCardList>
    </div>
  );
}

export default App;
