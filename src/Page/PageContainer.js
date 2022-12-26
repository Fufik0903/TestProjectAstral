import { Route, Router, Routes } from "react-router-dom";
import LoginContainer from "../Login/LoginContainer";

import CardListContainer from "./CardList/CardListContainer";
import FooterContainer from "./Footer/FooterContainer";
import HeaderContainer from "./Header/HeaderContainer";
import MainPage from "./MainPage";
import "./Page.css";
import ProfileContainer from "./Profile/ProfileContainer";
const PageConatainer = () => {
  return (
    <div className="container">
      <HeaderContainer />
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"/cards"} element={<CardListContainer />} />
        <Route path={"/login"} element={<LoginContainer />} />
        <Route path={"/profile"} element={<ProfileContainer />} />
      </Routes>
      <FooterContainer />
    </div>
  );
};

export default PageConatainer;
