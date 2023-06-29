import React from "react";
import styles from "./styles.module.css";

export default function Button({
  type,
  btnStyle = "primary",
  width = "",
  onClick,
  value,
  children,
}) {
  let classNames = styles.button;

  if (btnStyle) classNames += ` ${styles[btnStyle] ? styles[btnStyle] : ""}`;
  if (width) classNames += ` ${styles[width] ? styles[width] : ""}`;

  return (
    <button type={type} className={classNames} onClick={onClick} value={value}>
      {children}
    </button>
  );
}
