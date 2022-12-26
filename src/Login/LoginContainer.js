import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginComponent from "./LoginComponent";

const LoginContainer = (props) => {
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.auth.isAuth);
  if (isAuth === true) return navigate("/");
  return <LoginComponent />;
};

export default LoginContainer;
