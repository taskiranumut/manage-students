import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";
import Button from "@/components/Forms/Button";
import CircleCaret from "@/components/Icons/CircleCaret";
import Bell from "@/components/Icons/Bell";
import Bars from "@/components/Icons/Bars";

export default function Header({ setIsOpen }) {
  const handleToggle = () => {
    setIsOpen((val) => !val);
  };

  return (
    <header className={styles.header}>
      <Link href="#" className={styles.backBtn}>
        <span className={styles.iconWrapper}>
          <CircleCaret />
        </span>
      </Link>
      <div className={styles.btnWrapper}>
        <Button type="button" btnStyle="icon">
          <span className={styles.iconWrapper}>
            <Bell />
          </span>
        </Button>
        <div className={styles.toggleBtn}>
          <Button type="button" btnStyle="icon" onClick={handleToggle}>
            <span className={styles.iconWrapper}>
              <Bars />
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
}
