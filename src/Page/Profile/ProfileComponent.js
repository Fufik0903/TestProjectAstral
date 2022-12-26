import { Form, Field } from "react-final-form";
import "./profile.css";
const FieldS = (item) => {
  console.log(item.item.data);
  return <div>{item.item.data}</div>;
};
const ProfileComponent = (props) => {
  const { profileData } = props;
  return (
    <div className="profileForm">
      <Form
        onSubmit={(formObj) => {
          console.log(formObj);
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div>
              {profileData.map((item, index) => {
                if (item.type === "text") {
                  return item.values.map((el) => {
                    return (
                      <Field name={String(Object.keys(el))}>
                        {({ input }) => (
                          <input
                            placeholder={Object.values(el)}
                            type={item.type}
                            {...input}
                            className="profileInput"
                          />
                        )}
                      </Field>
                    );
                  });
                } else if (item.type == "radio") {
                  return (
                    <label>
                      <Field
                        className="profileRadio"
                        name={item.name}
                        component="input"
                        type={item.type}
                        value={item.value}
                      />{" "}
                      {item.text}
                    </label>
                  );
                } else if (item.type == "date") {
                  return (
                    <div>
                      <div className="title">Дата рождения</div>
                      <Field name="birthday">
                        {({ input }) => (
                          <input
                            type="date"
                            value="2018-07-22"
                            {...input}
                            className="profileInput"
                          />
                        )}
                      </Field>
                    </div>
                  );
                } else if (item.type == "file") {
                  return (
                    <div>
                      <div className="title">Добавить аватар</div>
                      <Field name="avatar">
                        {({ input }) => (
                          <input
                            type="file"
                            accept="image/png, image/jpeg"
                            {...input}
                            className="profileInput"
                          />
                        )}
                      </Field>
                    </div>
                  );
                }
              })}
            </div>
            <div>
              <label className="title">Для чего вам нужен язык</label>
              <div className="reason">
                {profileData.map((item) => {
                  if (item.type == "checkbox")
                    return (
                      <label>
                        <Field
                          className="profileRadio"
                          name={item.name}
                          component="input"
                          type={item.type}
                          value={item.value}
                        />{" "}
                        {item.text}
                      </label>
                    );
                })}
              </div>
            </div>
            {profileData.map((item) => {
              if (item.component == "textarea") {
                return (
                  <div className="profileItem">
                    <label className="title">{item.labelText}</label>
                    <Field
                      className="profileInput"
                      name={item.name}
                      component={item.component}
                      placeholder={item.text}
                    />
                  </div>
                );
              } else if (item.type == "time") {
                return (
                  <div className="profileItem">
                    <label className="title">{item.labelText}</label>
                    <Field
                      className="profileInput"
                      name={item.name}
                      component="input"
                      type={item.type}
                    />
                  </div>
                );
              } else if (item.type == "select") {
                return (
                  <div>
                    <div className="profileItem">
                      <label className="title">{item.labelText}</label>
                      <Field
                        name={item.name}
                        component={item.component}
                        multiple
                      >
                        {item.text.map((element) => {
                          return (
                            <option value={String(Object.keys(element))}>
                              {Object.values(element)}
                            </option>
                          );
                        })}
                      </Field>
                    </div>
                  </div>
                );
              }
            })}

            <button type="submit">Редактировать</button>
          </form>
        )}
      </Form>
    </div>
  );
};

export default ProfileComponent;
