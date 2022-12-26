import { NavLink, useNavigate } from "react-router-dom";
import "./header.css";
const HeaderComponent = (props) => {
  const { fullName, name, login, isAuth } = props;
  const navigate = useNavigate();
  if (isAuth === false) return navigate("/");
  return (
    <div className="headerContainer">
      <NavLink to={"/"} className="headerItem">
        Главная
      </NavLink>
      <NavLink to={"/profile"} className="headerItem">
        Профиль
      </NavLink>
      <NavLink to={"/cards"} className="headerItem">
        Карточки
      </NavLink>
      {isAuth ? <div className="headerItem">{login}</div> : <></>}
    </div>
  );
};

export default HeaderComponent;
