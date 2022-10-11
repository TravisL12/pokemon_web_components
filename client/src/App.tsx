import { useState } from "react";
import axios from "axios";
import "./App.styles.ts";
import { SCardList } from "./App.styles";
import { ICard } from "./tcgTypes/card";
import Card from "./Card";
import SearchHeader from "./SearchHeader";

function App() {
  const [cards, setCards] = useState<ICard[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [subtypeQuery, setSubtypeQuery] = useState<any>({});
  const [typeQuery, setTypeQuery] = useState<any>({});

  const fetchCards = async ({ nameQuery, subtypeQuery }: any) => {
    setLoading(true);
    const req = await axios.get(`http://0.0.0.0:1212/cards`, {
      params: { name: nameQuery },
    });
    setLoading(false);
    if (req.data.results) {
      setCards(req.data.results);
    }
  };

  const handleSubtypeCheckbox = (event: any) => {
    const item = { [event.target.name]: event.target.checked };
    setSubtypeQuery({ ...subtypeQuery, ...item });
  };

  const handleTypeCheckbox = (event: any) => {
    const item = { [event.target.name]: event.target.checked };
    setTypeQuery({ ...typeQuery, ...item });
  };

  return (
    <div>
      <SearchHeader
        handleSubtypeCheckbox={handleSubtypeCheckbox}
        handleTypeCheckbox={handleTypeCheckbox}
        fetchCards={fetchCards}
        cards={cards}
        loading={loading}
        subtypeQuery={subtypeQuery}
        typeQuery={typeQuery}
      />
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
