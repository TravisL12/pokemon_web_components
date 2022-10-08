import { useEffect, useState } from "react";
import axios from "axios";
import "./App.styles.ts";
import { SSearch, SCardList, SSearchHeader } from "./App.styles";
import { ICard } from "./tcgTypes/card";
import Card from "./Card";
import { SUBTYPES } from "./constants";

function App() {
  const [nameQuery, setNameQuery] = useState<string>("arceus");
  const [subtypeQuery, setSubtypeQuery] = useState<any>({});
  const [cards, setCards] = useState<ICard[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    setLoading(true);
    const req = await axios.get(`http://0.0.0.0:1212/cards`, {
      params: { name: nameQuery, subtype: subtypeQuery },
    });
    setLoading(false);
    if (req.data.results) {
      setCards(req.data.results);
    }
  };

  const handleCheckbox = (event: any) => {
    const item = { [event.target.name]: event.target.checked };
    setSubtypeQuery({ ...subtypeQuery, ...item });
  };

  return (
    <div>
      <SSearchHeader>
        <h2>Welcome to Pokemon Card Search!</h2>
        <div>
          <SSearch>
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Name search"
                value={nameQuery}
                onChange={(event) => setNameQuery(event.target.value)}
              />
            </div>
            <div>
              {SUBTYPES.map((subtype: string) => {
                return (
                  <div key={`subtype-${subtype}`}>
                    <label htmlFor={`subtype-${subtype}`}>{subtype}</label>
                    <input
                      type="checkbox"
                      onChange={handleCheckbox}
                      name={subtype}
                      checked={subtypeQuery[subtype] || false}
                      id={`subtype-${subtype}`}
                    />
                  </div>
                );
              })}
            </div>
          </SSearch>
          <button onClick={fetchCards}>Get card!</button>
        </div>
        <div>{loading ? "Loading..." : `Found ${cards.length}`}</div>
      </SSearchHeader>
      {cards.length > 0 && (
        <SCardList>
          {cards.map((card) => {
            return <Card key={card.id} card={card} />;
          })}
        </SCardList>
      )}
    </div>
  );
}

export default App;
