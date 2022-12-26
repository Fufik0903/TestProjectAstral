import { AUTHORIZATION, AUTHORIZATION_DELETE } from "../Constants/Constants";

let initialState = {
  isAuth: false,
};
let AuthReducer = (state = initialState, action) => {
  let auth = state.isAuth;
  let msg = state.errorMessage;
  switch (action.type) {
    case AUTHORIZATION:
      return {
        ...state,
        isAuth: true,
      };
    case AUTHORIZATION_DELETE:
      return {
        ...state,
        isAuth: false,
      };
    default:
      return state;
  }
};
export default AuthReducer;
