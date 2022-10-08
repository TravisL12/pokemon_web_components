import { SCard, SCardInfo, SCardTitle } from "./App.styles";
import { ICard } from "./tcgTypes/card";

function Card({ card }: { card: ICard }) {
  return (
    <SCard>
      <SCardTitle>
        <div className="series-logo">
          <img
            title={card.set.name}
            alt={card.set.name}
            src={card.set.images.logo}
          />
        </div>
        <div className="card-name">{card.name}</div>
      </SCardTitle>
      <div className="img-container">
        <img src={card.images.small} />
      </div>
      <SCardInfo>
        <div className="flavor-text">{card.flavorText}</div>
        <div>Types: {card.subtypes.join(", ")}</div>
      </SCardInfo>
    </SCard>
  );
}

export default Card;
