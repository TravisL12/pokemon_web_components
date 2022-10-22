import {
  SCardImgBody,
  SCard,
  SCardInfo,
  SCardTitle,
  SCardBg,
} from "./Card.styles";
import { ICard } from "./tcgTypes/card";

function Card({
  card,
  setSelected,
}: {
  card: ICard;
  setSelected: (val: any) => void;
}) {
  return (
    <SCard bgUrl={card.images.small}>
      <SCardBg bgUrl={card.images.small}></SCardBg>
      <SCardTitle>
        <div className="series-logo">
          <img
            title={card.set.name}
            alt={card.set.name}
            src={card.set.images.logo}
          />
        </div>
        <div
          className="card-name"
          onClick={() => {
            setSelected(card);
          }}
        >
          {card.name}
        </div>
        <div className="series-logo"></div>
      </SCardTitle>
      <SCardImgBody>
        <img src={card.images.small} />
      </SCardImgBody>
      <SCardInfo>
        <div>Types: {card.types?.join(", ")}</div>
        <div>Sub-types: {card.subtypes.join(", ")}</div>
      </SCardInfo>
    </SCard>
  );
}

export default Card;
