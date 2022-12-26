import { SET_PROFILE } from "../Constants/Constants";

let initialState = {
  profileData: [
    {
      type: "text",
      values: [
        { name: "Имя" },
        { sername: "Фамилия" },
        { middleName: "Отчество" },
        { age: "Сколько вам полных лет?" },
        { phone: "телефон" },
        { email: "email" },
        { passport: "Введите номер и серию паспорта" },
        { city: "Введите город проживания" },
        { skype: "Введите логин Skype если есть" },
      ],
    },

    {
      type: "checkbox",
      value: "friendly",
      name: "learningForWhat",
      text: " Для общения с друзьями",
    },
    {
      type: "checkbox",
      value: "job",
      name: "learningForWhat",
      text: "Для работы",
    },
    {
      type: "checkbox",
      value: "love",
      name: "learningForWhat",
      text: "Для поиска второй половинки",
    },
    {
      type: "checkbox",
      value: "myself",
      name: "learningForWhat",
      text: "Для себя",
    },
    {
      type: "radio",
      value: "man",
      name: "female",
      text: "Мужчина",
    },
    {
      type: "radio",
      value: "woman",
      name: "female",
      text: "Женщина",
    },
    {
      type: "date",
      value: "2018-07-22",
    },
    {
      type: "file",
      value: "image/png, image/jpeg",
    },
    {
      type: "time",
      name: "time",
      labelText: "Удобное время для занятий",
      component: "input",
    },
    {
      component: "textarea",
      name: "aboutYourSelf",
      labelText: "Расскажите о себе",
      text: "Ваше желания и стремления чему-то научиться...",
    },
    {
      type: "select",
      component: "select",
      name: "howWhantToStart",
      labelText: "Как предпочитаете заниматься",
      text: [
        {
          withTeacherOffline: "С учителем персонально и дистанционно",
        },
        {
          withTeacherOnline: "С учителем персонально и очно",
        },
        {
          groupOffline: "С группой и дистанционно",
        },
        {
          groupOnline: "С группой и очно",
        },
        {
          withMyself: "Самому по нашим методичкам",
        },
      ],
    },
    {
      type: "select",
      component: "select",
      name: "levelOfLanguage",
      labelText: "Выберите ваш уровень знания английского языка",
      text: [
        {
          A1: "Beginner (A1)",
        },
        {
          A2: "Elementary (A2)",
        },
        {
          B1: "Intermediate (B1)",
        },
        {
          B2: "Upper-Intermediate (B2)",
        },
        {
          C1: "Advanced (C1)",
        },
        {
          C2: "Proficiency (C2)",
        },
      ],
    },
  ],

  aboutAuthor: {
    fullName: "Давыдова София Алексеевна",
    name: "София",
    login: "SuperDude777",
    phone: "+7-900-622-03-82",
    jobPosition: "react/react-native разработчик",
    city: "Санкт-Петербург",
    adress: "г. Санкт-Петербург, ул. 7-ая Крассноармейская д. 3",
    email: "sofia.davidova999@gmail..com",
  },
};
let ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default ProfileReducer;
