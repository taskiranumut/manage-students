import React from "react";
import styles from "./styles.module.css";

export default function AppTitle({ size, title = "Manage Courses" }) {
  return (
    <div className={`${styles.appTitle} ${styles[size]}`}>
      <div className={styles.titleIcon}></div>
      <h1>{title}</h1>
    </div>
  );
}
