const MainPageComponent = (props) => {
  const { logIn, isAuth } = props;

  return (
    <div className="MainPageContainer">
      <span className="title">Easy Learning English</span>
      <span className="subTitle">The best practice with our teacher</span>
      <button
        className="enterBtn"
        onClick={() => {
          logIn(isAuth);
        }}
      >
        {isAuth ? "Выйти" : "Войти"}
      </button>
    </div>
  );
};

export default MainPageComponent;
