import React from "react";
import styles from "./styles.module.css";

export default function Card({ size, children }) {
  return (
    <section className={`${styles.card} ${styles[size]}`}>{children}</section>
  );
}
