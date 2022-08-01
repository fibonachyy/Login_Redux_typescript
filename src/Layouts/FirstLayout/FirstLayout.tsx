import React from "react";
import styles from "./FirstLayout.module.scss";
interface IFirstLayout {
  children: React.ReactNode;
}
const FirstLayout: React.FunctionComponent<IFirstLayout> = ({ children }) => {
  return (
    <>
      <div className={styles.container}>{children}</div>
    </>
  );
};

export default FirstLayout;
