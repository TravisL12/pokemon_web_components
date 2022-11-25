import { SCardTitle } from "./Card.styles";
import {
  SDetailImgBody,
  SDetailContainer,
  SDetailInner,
  SDetailBody,
  SDetailDataBody,
} from "./Detail.styles";
import { ICard } from "./tcgTypes/card";

function CardDetailModal({
  card,
  setSelected,
}: {
  card: ICard;
  setSelected: (card: ICard | null) => void;
}) {
  console.log(card, "card");

  return (
    <SDetailContainer>
      <SDetailInner>
        <SCardTitle style={{ height: "50px" }}>
          <div className="series-logo">
            <img
              title={card.set.name}
              alt={card.set.name}
              src={card.set.images.logo}
            />
          </div>
          <div className="card-name">{card.name}</div>
          <button onClick={() => setSelected(null)}>Close</button>
        </SCardTitle>
        <SDetailBody>
          <SDetailImgBody>
            <img src={card.images.large} />
          </SDetailImgBody>
          <SDetailDataBody>
            <h3>Abilities</h3>
            {card.abilities?.map((ability) => {
              return (
                <div key={ability.name}>
                  <p style={{ marginBottom: 0 }}>
                    <strong>{ability.name}</strong>
                  </p>
                  <p style={{ marginTop: 0 }}>{ability.text}</p>
                </div>
              );
            })}
          </SDetailDataBody>
          <SDetailDataBody>
            <h3>Attacks</h3>
            {card.attacks?.map((attack) => {
              return (
                <div key={attack.name}>
                  <p style={{ marginBottom: 0 }}>
                    <strong>{attack.name}</strong> - Damage: {attack.damage}
                  </p>
                  <p style={{ marginTop: 0 }}>{attack.text}</p>
                </div>
              );
            })}
          </SDetailDataBody>
        </SDetailBody>
      </SDetailInner>
    </SDetailContainer>
  );
}

export default CardDetailModal;
