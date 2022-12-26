import { useState } from "react";
import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { set_authorization_data } from "../redux/Actions/Actions";
import "./login.css";

const LoginComponent = (props) => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState(false);

  return (
    <div className="form">
      <Form
        onSubmit={async (formObj) => {
          let response = await fetch(
            "https://73a6749c-9922-4213-abbe-5c703b9599f1.mock.pstmn.io/login",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                login: formObj.login,
                password: formObj.password,
              }),
            }
          );
          if (response.status === 200) {
            dispatch(set_authorization_data(formObj));
          } else {
            setErrorMessage(true);
          }
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            {errorMessage ? (
              <div className="errorMessage">
                Вход невозможен, неправильные логин или пароль
              </div>
            ) : (
              <></>
            )}
            <Field name="login">
              {({ input }) => (
                <input
                  placeholder="Введите логин"
                  type="text"
                  {...input}
                  className="loginInput"
                />
              )}
            </Field>
            <Field name="password">
              {({ input }) => (
                <input
                  placeholder="Введите пароль"
                  type="text"
                  {...input}
                  className="loginInput"
                />
              )}
            </Field>

            <button type="submit">Войти</button>
          </form>
        )}
      </Form>
    </div>
  );
};

export default LoginComponent;
