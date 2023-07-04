import React, { useState } from "react";
import styles from "./styles.module.css";
import CircleCross from "@/components/Icons/CircleCross";

export default function NoContent({ text }) {
  return (
    <div class={styles.container}>
      <div>
        <span>
          <CircleCross />
        </span>
      </div>
      <p class={styles.text}>{text}</p>
    </div>
  );
}
