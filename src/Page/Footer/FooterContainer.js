import { useSelector } from "react-redux";
import FooterComponent from "./FooterComponent";

const FooterContainer = () => {
  const profile = useSelector((state) => state.profile.aboutAuthor);
  return <FooterComponent {...profile} />;
};

export default FooterContainer;
