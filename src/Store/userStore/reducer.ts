import * as types from "../types";
import { UserAction } from "./action";

export interface IUser {
  name?: string;
  email?: string;
  token?: string;
  avatar?: string;
}
const initialState = {};
export const userReducer = (
  state: IUser = initialState,
  action: UserAction
) => {
  try {
    console.log("here");
    switch (action.type) {
      case types.SET_LOGIN_USER:
        const { data } = action.payload;
        return {
          ...state,
          ...data,
        };
      case types.LOG_OUT_USER:
        return { ...initialState };
      default:
        return state;
    }
  } catch (e) {
    throw e;
  }
};
