import axios from "axios";
import * as LocalStorageService from "../localStorage/localStorage";
// import router from "./router/router";

// LocalStorageService

// Add a request interceptor
axios.interceptors.request.use(
  (config) => {
    /* -------------------------------------------------------------------------- */
    /*                do it after all interceptor and local storage               */
    const user = LocalStorageService.getKey("user");
    if (!user) return config;
    const parsedUserData = JSON.parse(user);
    if (!config.headers || !parsedUserData.token) return;
    config.headers["Authorization"] = "JWT " + parsedUserData.token;
    config.headers["Content-Type"] = "application/json";

    /* -------------------------------------------------------------------------- */

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  function (error) {
    // const originalRequest = error.config;

    // if (error.response.status === 401) {
    //   return Promise.reject(error);
    // }

    // if (error.response.status === 401) {

    // }
    return Promise.reject(error);
  }
);

export default axios;
