import { SET_CARDS } from "../Constants/Constants";

let initialState = {
  titles: [
    "Word of the Day",
    "Aspire to inspire",
    "Never look back",
    "Now or never!",
  ],
  cardList: [
    {
      word: "benevolent",
      uses: 'well meaning and kindly. "a benevolent smile"',
      translateWord: "доброжелательный",
      translateUses: 'благонамеренный и добрый. "доброжелательная улыбка"',
    },
    {
      word: "performance",
      uses: "The performance has been rather a waste of time, hasn not it",
      translateWord: "представление",
      translateUses:
        "Представление было скорее пустой тратой времени, не так ли",
    },
    {
      word: "look like",
      uses: "Looks like computer diagram--a ternary logic.",
      translateWord: "выглядит как",
      translateUses: "Похоже на компьютерную схему - троичная логика.",
    },
    {
      word: "nevermind",
      uses: "Oh, don't be shocked,' she said, 'you must nevermind what I say",
      translateWord: "неважно",
      translateUses:
        "О, не удивляйтесь, - сказала она, - вы не должны обращать внимания на то, что я говорю",
    },
    {
      word: "tomorrow",
      uses: "The wife and I will be at Mrs. Doris's funeral tomorrow",
      translateWord: "завтра",
      translateUses: "The wife and I will be at Mrs. Doris's funeral tomorrow",
    },
  ],
};
let CardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CARDS:
    default:
      return state;
  }
};
export default CardReducer;
