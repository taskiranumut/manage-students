"use client";

import React from "react";
import styles from "./layout.module.css";
import GlobalContextProvider from "@/contexts/StudentList/provider";
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
      <GlobalContextProvider>
        <div className={styles.main}>{children}</div>
      </GlobalContextProvider>
    </div>
  );
}
