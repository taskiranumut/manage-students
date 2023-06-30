"use client";

import React from "react";
import styles from "./page.module.css";
import Home from "@/features/Dashboard/Home";

export default function Page() {
  return (
    <main className={styles.main}>
      <Home />
    </main>
  );
}
