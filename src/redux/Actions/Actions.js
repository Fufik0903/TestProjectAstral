import { AUTHORIZATION, AUTHORIZATION_DELETE } from "../Constants/Constants";

export const set_authorization_data = (data) => {
  return {
    type: AUTHORIZATION,
    data: data,
  };
};
export const delete_authorization = () => {
  return {
    type: AUTHORIZATION_DELETE,
  };
};
