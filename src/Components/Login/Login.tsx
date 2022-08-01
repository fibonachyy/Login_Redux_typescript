import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./login.module.scss";
import { loginUser } from "../../Store/userStore/action";
const Login: React.FunctionComponent = () => {
  interface IInputData {
    [key: string]: any;
  }
  const initialData = {
    username: "",
    password: "",
  };
  const [inputData, setInputData] = useState<IInputData>(initialData);
  const dispatch = useDispatch();
  const handelInputs = (_event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = _event.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
    return;
  };

  const handelClear = () => {
    setInputData(initialData);
    return;
  };

  const handelLogin = async () => {
    // i will call action from here
    dispatch(await loginUser(inputData["username"], inputData["password"]));
  };
  return (
    <>
      <div className={styles.container}>
        <h2>Login</h2>
        <input
          placeholder="Username"
          value={inputData["username"]}
          name="username"
          onChange={handelInputs}
        />
        <input
          type="password"
          placeholder="Password"
          value={inputData["password"]}
          name="password"
          onChange={handelInputs}
        />
        <div className={styles.buttonContainer}>
          <button onClick={handelClear}>Clear</button>
          <button onClick={handelLogin}>Login</button>
        </div>
      </div>
    </>
  );
};

export default Login;
