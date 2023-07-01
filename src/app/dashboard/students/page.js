"use client";

import React from "react";
import styles from "./page.module.css";
import Students from "@/features/Dashboard/Students";

export default function Page() {
  return (
    <main className={styles.main}>
      <Students />
    </main>
  );
}
