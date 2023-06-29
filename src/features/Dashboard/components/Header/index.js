import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";
import Button from "@/components/Forms/Button";
import CircleCaret from "@/components/Icons/CircleCaret";
import Bell from "@/components/Icons/Bell";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="#" className={styles.backBtn}>
        <span className={styles.iconWrapper}>
          <CircleCaret />
        </span>
      </Link>
      <Button type="button" btnStyle="icon">
        <span className={styles.iconWrapper}>
          <Bell />
        </span>
      </Button>
    </header>
  );
}
