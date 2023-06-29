"use client";

import React from "react";
import styles from "./page.module.css";
import SignIn from "@/features/Authentication/SignIn";

export default function Page() {
  return (
    <main className={styles.main}>
      <SignIn />
    </main>
  );
}
