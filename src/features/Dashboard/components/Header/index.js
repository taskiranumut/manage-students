import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./styles.module.css";
import Button from "@/components/Forms/Button";
import CircleCaret from "@/components/Icons/CircleCaret";
import Bell from "@/components/Icons/Bell";
import Bars from "@/components/Icons/Bars";

export default function Header({ setIsOpen }) {
  const router = useRouter();

  const handleToggle = () => {
    setIsOpen((val) => !val);
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <header className={styles.header}>
      <div className={styles.backBtn}>
        <Button type="button" btnStyle="icon" onClick={handleBack}>
          <span className={styles.iconWrapper}>
            <CircleCaret />
          </span>
        </Button>
      </div>
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
