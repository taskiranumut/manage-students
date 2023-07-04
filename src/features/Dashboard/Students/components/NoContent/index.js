import React, { useState } from "react";
import styles from "./styles.module.css";
import CircleCross from "@/components/Icons/CircleCross";

export default function NoContent({ text }) {
  return (
    <div className={styles.container}>
      <div>
        <span>
          <CircleCross />
        </span>
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
