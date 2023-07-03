import React, { useState } from "react";
import styles from "./styles.module.css";
import Search from "@/components/Icons/Search";
import { useGlobalContext } from "@/contexts/StudentList/context";

export default function SearchBar() {
  const { searchQuery, setSearchQuery } = useGlobalContext();

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className={styles.inputWrapper}>
      <input
        type="text"
        name="searchQuery"
        className={styles.input}
        placeholder="Search by eye color"
        onChange={handleChange}
        value={searchQuery}
      />
      <button type="submit" className={styles.iconBtn}>
        <Search />
      </button>
    </div>
  );
}
