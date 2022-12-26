import { useSelector } from "react-redux";
import CardListComponent from "./CardListComponent";

const CardListContainer = (props) => {
  const { cardList, titles } = useSelector((state) => state.cardList);
  return <CardListComponent cardList={cardList} titles={titles} />;
};

export default CardListContainer;
