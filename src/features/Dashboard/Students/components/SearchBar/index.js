import React, { useState } from "react";
import styles from "./styles.module.css";
import Search from "@/components/Icons/Search";
import { useGlobalContext } from "@/contexts/StudentList/context";
import Form from "@/components/Forms/Form";
import Button from "@/components/Forms/Button";
import Cross from "@/components/Icons/Cross";

export default function SearchBar() {
  const [form, setForm] = useState({ query: "" });
  const { searchQuery, setSearchQuery } = useGlobalContext();

  const handleChange = (e) => {
    setForm({
      [e.target.name]: e.target.value,
    });
  };

  const handleReset = () => {
    setForm({ query: "" });

    if (searchQuery) {
      setSearchQuery("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(form.query);
  };

  return (
    <div className={styles.formWrapper}>
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
        <div className={styles.resetBtn}>
          {form.query && (
            <Button type="button" btnStyle="icon" onClick={handleReset}>
              <span>
                <Cross />
              </span>
            </Button>
          )}
        </div>
      </Form>
    </div>
  );
}
