import React from "react";
import styles from "./styles.module.css";
import SearchBar from "@/components/Forms/SearchBar";
import Button from "@/components/Forms/Button";
import Link from "next/link";

export default function Header({ title }) {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <div className={styles.wrapper}>
        <SearchBar />
        <Link href="/dashboard/add-student">
          <Button type="button" btnStyle="primary">
            add new student
          </Button>
        </Link>
      </div>
    </div>
  );
}
