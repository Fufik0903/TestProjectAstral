import "./footer.css";
const FooterComponent = (props) => {
  const { phone, fullName, jobPosition, adress, email } = props;
  return (
    <div className="footerContainer">
      <div className="item">
        <h3>Разработчик</h3>
        {fullName}
      </div>
      <div className="item">
        <h3>Должность</h3>
        {jobPosition}
      </div>
      <div className="item">
        <h3>Мы находимся</h3>
        {adress}
      </div>
      <div className="item">
        <h3>Контакты</h3>
        <div>{phone}</div>
        <div>{email}</div>
      </div>
    </div>
  );
};

export default FooterComponent;
