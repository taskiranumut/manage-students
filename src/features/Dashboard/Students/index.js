"use client";

import React, { useEffect, useState, useMemo } from "react";
import styles from "./styles.module.css";
import useFetch from "@/hooks/useFetch";
import { useStudentListContext } from "@/contexts/StudentList/context";
import { rebaseDataList } from "@/features/Dashboard/Students/utils";
import { baseUrl } from "@/features/Dashboard/Students/api";
import Header from "@/features/Dashboard/Students/components/Header";
import Main from "@/features/Dashboard/Students/components/Main";
import Footer from "@/features/Dashboard/Students/components/Footer";

export default function Students() {
  const { studentList, setStudentList } = useStudentListContext();

  const url = `${baseUrl}?limit=5&select=firstName,lastName,email,phone,image,company,website`;
  const options = useMemo(() => ({ method: "GET", cache: "force-cache" }), []);
  const { data, loading, error } = useFetch(url, options, true);

  useEffect(() => {
    if (!data) return;

    const rebasedList = rebaseDataList(data?.users);

    setStudentList((list) => [...getNewStudents(list), ...rebasedList]);
  }, [data, setStudentList]);

  const getNewStudents = (list) => {
    if (list.length === 0) return [];

    return list.filter((item) => item.isNew).reverse();
  };

  if (loading) return;

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
