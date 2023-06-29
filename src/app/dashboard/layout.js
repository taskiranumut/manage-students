"use client";

import React from "react";
import styles from "./layout.module.css";
import Header from "@/components/Header";

export default function Layout({ children }) {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.navbar}>Navbar</div>
      <div className={styles.main}>{children}</div>
    </div>
  );
}
