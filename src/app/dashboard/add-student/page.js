"use client";

import React from "react";
import styles from "./page.module.css";
import StudentDetail from "@/features/Dashboard/Students/components/StudentDetail";

export default function Page() {
  return (
    <main className={styles.main}>
      <StudentDetail isEdit={false} />
    </main>
  );
}
