import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../Store";
import { logOut } from "../../Store/userStore/action";
import styles from "./profile.module.scss";
const Profile: React.FunctionComponent = () => {
  const { email, name, avatar } = useSelector((state: State) => state.user);
  const dispatch = useDispatch();

  const handelLogout = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(logOut());
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.avatar}>
          <img src={avatar} alt="user avatar" />
        </div>
        <h1>{name}</h1>
        <h3>{email}</h3>

        <a onClick={handelLogout} href="#">
          logout
        </a>
      </div>
    </>
  );
};

export default Profile;
