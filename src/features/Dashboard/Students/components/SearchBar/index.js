import React, { useState } from "react";
import styles from "./styles.module.css";
import Search from "@/components/Icons/Search";
import { useGlobalContext } from "@/contexts/StudentList/context";
import Form from "@/components/Forms/Form";

export default function SearchBar() {
  const [form, setForm] = useState({ query: "" });
  const { setSearchQuery } = useGlobalContext();

  const handleChange = (e) => {
    setForm({
      [e.target.name]: [e.target.value],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(form.query);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          name="query"
          className={styles.input}
          placeholder="Search..."
          onChange={handleChange}
          value={form.query}
        />
        <button type="submit" className={styles.iconBtn}>
          <Search />
        </button>
      </div>
    </Form>
  );
}
