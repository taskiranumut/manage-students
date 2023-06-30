"use client";

import React from "react";
import styles from "./layout.module.css";
import Header from "@/features/Dashboard/components/Header";
import Sidebar from "@/features/Dashboard/components/Sidebar";

export default function Layout({ children }) {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.main}>{children}</div>
    </div>
  );
}
