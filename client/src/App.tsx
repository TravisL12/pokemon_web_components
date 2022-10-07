import { useState } from "react";
import axios from "axios";
import "./App.styles.ts";
import { SCardList, SSearchHeader } from "./App.styles";
import { ICard } from "./tcgTypes/card";

function App() {
  const [nameQuery, setNameQuery] = useState<string>("");
  const [cards, setCards] = useState<ICard[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchCards = async () => {
    setLoading(true);
    const req = await axios.get(`http://0.0.0.0:1212/cards`, {
      params: { name: nameQuery },
    });
    setLoading(false);
    if (req.data.results) {
      setCards(req.data.results);
    }
  };

  return (
    <div>
      <SSearchHeader>
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
        <div>{loading ? "Loading..." : `Found ${cards.length}`}</div>
      </SSearchHeader>
      {cards.length > 0 && (
        <SCardList>
          {cards.map((card) => {
            return (
              <div key={card.id}>
                <div className="card-name">{card.name}</div>
                <div className="img-container">
                  <img src={card.images.small} />
                </div>
              </div>
            );
          })}
        </SCardList>
      )}
    </div>
  );
}

export default App;
