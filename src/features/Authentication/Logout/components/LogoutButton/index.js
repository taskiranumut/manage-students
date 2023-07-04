"use client";

import React from "react";
import styles from "./style.module.css";
import FromBracket from "@/components/Icons/FromBracket";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    window.sessionStorage.removeItem("isAuth");
    router.replace("/sign-in");
  };

  return (
    <button type="button" className={styles.btn} onClick={handleLogout}>
      <span>Logout</span>
      <div className={styles.iconWrapper}>
        <span>
          <FromBracket />
        </span>
      </div>
    </button>
  );
}
