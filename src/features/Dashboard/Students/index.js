"use client";

import React, { useEffect, useState, useMemo } from "react";
import useFetch from "@/hooks/useFetch";
import { rebaseData } from "@/features/Dashboard/Students/utils";
import styles from "./styles.module.css";
import Header from "@/features/Dashboard/Students/components/Header";
import Main from "@/features/Dashboard/Students/components/Main";
import Footer from "@/features/Dashboard/Students/components/Footer";

export default function Students() {
  const [studentList, setStudentList] = useState([]);

  const url =
    "https://dummyjson.com/users?limit=5&select=firstName,lastName,email,phone,image,company,website";
  const options = useMemo(() => ({ method: "GET" }), []);
  const { data, loading, error } = useFetch(url, options);

  useEffect(() => {
    if (!data) return;

    const rebasedData = rebaseData(data?.users);
    setStudentList(rebasedData);
  }, [data]);

  return (
    <>
      <section className={styles.header}>
        <Header title="Student List" />
      </section>
      <section className={styles.content}>
        <Main bodyData={studentList} />
      </section>
      <section className={styles.footer}>
        <Footer />
      </section>
    </>
  );
}
