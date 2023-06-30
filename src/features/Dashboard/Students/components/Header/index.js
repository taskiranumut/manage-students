import React from "react";
import styles from "./styles.module.css";
import SearchBar from "@/components/Forms/SearchBar";
import Button from "@/components/Forms/Button";

export default function Header({ title }) {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <div className={styles.wrapper}>
        <SearchBar />
        <Button type="button" btnStyle="primary">
          add new student
        </Button>
      </div>
    </div>
  );
}
