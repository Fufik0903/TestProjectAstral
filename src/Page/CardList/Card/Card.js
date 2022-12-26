import { useState } from "react";
import "./../cards.css";
const Card = (props) => {
  const { item, title } = props;
  const [learnMore, setLearnMore] = useState(false);
  const translateCard = (data) => {
    setLearnMore(!data);
  };
  return (
    <div className={learnMore ? "card translateCard" : "card englishCard"}>
      <div className="cardTitle">{title}</div>
      {learnMore ? (
        <div className="cardItem">
          <div className="cardWord">{item.translateWord}</div>
          <div className="cardPhrase">{item.translateUses}</div>
          <button
            className="LearnMoreBtn"
            onClick={() => {
              translateCard(true);
            }}
          >
            Показать больше
          </button>
        </div>
      ) : (
        <div className="cardItem">
          <div className="cardWord">{item.word}</div>
          <div className="cardPhrase">{item.uses}</div>
          <button
            className="LearnMoreBtn"
            onClick={() => {
              translateCard(false);
            }}
          >
            Learn More
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
