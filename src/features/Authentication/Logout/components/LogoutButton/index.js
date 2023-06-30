import React from "react";
import styles from "./style.module.css";
import FromBracket from "@/components/Icons/FromBracket";

export default function LogoutButton() {
  return (
    <button type="button" className={styles.btn}>
      <span>Logout</span>
      <div className={styles.iconWrapper}>
        <span>
          <FromBracket />
        </span>
      </div>
    </button>
  );
}
