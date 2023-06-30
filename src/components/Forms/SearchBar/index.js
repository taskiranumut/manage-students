import React from "react";
import styles from "./styles.module.css";
import Form from "@/components/Forms/Form";
import Search from "@/components/Icons/Search";

export default function SearchBar() {
  return (
    <Form>
      <div className={styles.inputWrapper}>
        <input type="text" className={styles.input} placeholder="Search..." />
        <button type="submit" className={styles.iconBtn}>
          <Search />
        </button>
      </div>
    </Form>
  );
}
