import {
  SCardImgBody,
  SDetailContainer,
  SCardInfo,
  SCardTitle,
  SDetailInner,
} from "./Card.styles";
import { ICard } from "./tcgTypes/card";

function CardDetailModal({
  card,
  setSelected,
}: {
  card: ICard;
  setSelected: (card: ICard | null) => void;
}) {
  return (
    <SDetailContainer>
      <SDetailInner>
        <SCardTitle>
          <div className="series-logo">
            <img
              title={card.set.name}
              alt={card.set.name}
              src={card.set.images.logo}
            />
          </div>
          <div className="card-name">
            {card.name}
            <button onClick={() => setSelected(null)}>Close</button>
          </div>
          <div className="series-logo"></div>
        </SCardTitle>
        <SCardImgBody>
          <img src={card.images.large} />
        </SCardImgBody>
      </SDetailInner>
    </SDetailContainer>
  );
}

export default CardDetailModal;
