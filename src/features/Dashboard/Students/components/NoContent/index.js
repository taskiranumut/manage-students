import React from "react";
import styles from "./styles.module.css";
import CircleCross from "@/components/Icons/CircleCross";

export default function NoContent({ text, icon = true }) {
  return (
    <div className={styles.container}>
      {icon && (
        <div>
          <span>
            <CircleCross />
          </span>
        </div>
      )}
      <p className={styles.text}>{text}</p>
    </div>
  );
}
