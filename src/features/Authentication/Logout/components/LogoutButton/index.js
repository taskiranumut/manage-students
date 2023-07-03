import React from "react";
import styles from "./style.module.css";
import FromBracket from "@/components/Icons/FromBracket";
import Link from "next/link";

export default function LogoutButton() {
  return (
    <Link href="/sign-in">
      <button type="button" className={styles.btn}>
        <span>Logout</span>
        <div className={styles.iconWrapper}>
          <span>
            <FromBracket />
          </span>
        </div>
      </button>
    </Link>
  );
}
