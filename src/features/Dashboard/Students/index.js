import React from "react";
import styles from "./styles.module.css";
import Header from "@/features/Dashboard/Students/components/Header";
import Main from "@/features/Dashboard/Students/components/Main";

export default function Students() {
  return (
    <>
      <section className={styles.header}>
        <Header title="Student List" />
      </section>
      <section className={styles.content}>
        <Main />
      </section>
      <section className={styles.footer}></section>
    </>
  );
}
