import { combineReducers, createStore } from "redux";
import AuthReducer from "./redux/Reducers/authReducer";
import CardReducer from "./redux/Reducers/CardReducer";
import ProfileReducer from "./redux/Reducers/ProfileReducer";

let reducers = combineReducers({
  auth: AuthReducer,
  profile: ProfileReducer,
  cardList: CardReducer,
});

let store = createStore(reducers);
export default store;
