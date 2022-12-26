import { useSelector } from "react-redux";
import HeaderComponent from "./HeaderComponent";

const HeaderContainer = () => {
  const profile = useSelector((state) => state.profile.profileData);
  const isAuth = useSelector((state) => state.auth.isAuth);
  if (isAuth === true) {
    return <HeaderComponent {...profile} isAuth={isAuth} />;
  }
};

export default HeaderContainer;
