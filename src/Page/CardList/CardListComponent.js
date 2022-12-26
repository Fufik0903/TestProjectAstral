import Card from "./Card/Card";
import "./cards.css";
const CardListComponent = (props) => {
  const { cardList, titles } = props;
  return (
    <div className="cardList">
      {cardList.map((item, index) => {
        const title = Math.floor(Math.random() * (titles.length - 1 + 1)) + 0;
        return <Card item={item} title={titles[title]} />;
      })}
    </div>
  );
};

export default CardListComponent;
