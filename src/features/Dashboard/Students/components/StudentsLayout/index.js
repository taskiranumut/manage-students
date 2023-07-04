"use client";

import React, { useState } from "react";
import styles from "./styles.module.css";
import GlobalContextProvider from "@/contexts/StudentList/provider";
import Header from "@/features/Dashboard/components/Header";
import Sidebar from "@/features/Dashboard/components/Sidebar";

export default function StudentsLayout({ children }) {
  return (
    <GlobalContextProvider>
      <div className={styles.gridContainer}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.main}>{children}</div>
      </div>
    </GlobalContextProvider>
  );
}
