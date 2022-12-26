import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  delete_authorization,
  set_authorization_data,
} from "../redux/Actions/Actions";
import MainPageComponent from "./MainPageComponent";

const MainPage = () => {
  const navigate = useNavigate();
  const [clickBtn, setClickBtn] = useState(false);
  const isAuth = useSelector((state) => state.auth.isAuth);

  const dispatch = useDispatch();
  const logIn = (data) => {
    if (data) {
      dispatch(delete_authorization());
      setClickBtn(false);
    } else {
      setClickBtn(true);
    }
  };
  useEffect(() => {
    if (isAuth === false && clickBtn === true) {
      return navigate("/login");
    }
  }, [clickBtn, isAuth]);

  return <MainPageComponent logIn={logIn} isAuth={isAuth} />;
};

export default MainPage;
