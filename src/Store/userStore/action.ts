import * as types from "../types";
import axios from "../../Services/interceptor/interceptor";
import { LocalStorageService } from "../../Services";
interface LoginUser {
  type: "SET_LOGIN_USER";
  payload: {
    data: any;
  };
}
interface LogOutUser {
  type: "LOG_OUT_USER";
}

export type UserAction = LoginUser | LogOutUser;

export const loginUser = async (
  _username: string,
  _password: string
): Promise<LoginUser> => {
  let userData = null;

  (async () => {
    const postData = {
      username: _username,
      password: _password,
    };
    // userData = await axios
    //   .post("", postData)
    //   .then((res: any) => res.data)

    userData = {
      name: "Mahdi Ashouri",
      email: "mahdi.eng77@gmail.com",
      avatar:
        "https://media-exp1.licdn.com/dms/image/D4E35AQGcaQtIefFvNg/profile-framedphoto-shrink_200_200/0/1656399410741?e=1659920400&v=beta&t=BKBSzP--zxAfbzik5srNLTvjrMBdqZdDwY7Xl-6K6iA",
      token: "my complex token",
    };
  })();

  LocalStorageService.setKey("user", JSON.stringify(userData));
  return {
    type: types.SET_LOGIN_USER,
    payload: {
      data: userData,
    },
  };
};

export const logOut = (): LogOutUser => {
  return {
    type: types.LOG_OUT_USER,
  };
};

export const setLastUserData = (userData: any): LoginUser => {
  return {
    type: types.SET_LOGIN_USER,
    payload: {
      data: userData,
    },
  };
};
