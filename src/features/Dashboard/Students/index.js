"use client";

import React, { useEffect, useState, useMemo } from "react";
import styles from "./styles.module.css";
import useFetch from "@/hooks/useFetch";
import { useGlobalContext } from "@/contexts/StudentList/context";
import { rebaseDataList } from "@/features/Dashboard/Students/utils";
import { baseUrl } from "@/features/Dashboard/Students/api";
import Header from "@/features/Dashboard/Students/components/Header";
import Main from "@/features/Dashboard/Students/components/Main";
import Footer from "@/features/Dashboard/Students/components/Footer";

export default function Students() {
  const {
    studentList,
    setStudentList,
    limit,
    setLimit,
    skip,
    setSkip,
    addedStudents,
  } = useGlobalContext();

  const [newLimit, setNewLimit] = useState(limit);
  const [isFetching, setIsFetching] = useState(false);

  const slicedStudents = useMemo(
    () => addedStudents.slice(skip, limit + skip),
    [addedStudents, limit, skip]
  );

  useEffect(() => {
    if (slicedStudents.length < limit) {
      setNewLimit(limit - slicedStudents.length);
      setIsFetching(true);
      console.log("içerde");
    } else {
      setIsFetching(false);
      setNewLimit(0);
      setStudentList(slicedStudents);
    }
  }, [slicedStudents, limit, skip, setStudentList]);

  console.log("slicedStudents: ", slicedStudents);
  console.log("newLimit: ", newLimit);

  const url = `${baseUrl}?limit=${newLimit}&skip=${skip}&select=firstName,lastName,email,phone,image,company,website`;
  const options = useMemo(() => ({ method: "GET", cache: "force-cache" }), []);
  const { data, loading, error } = useFetch(url, options, isFetching);

  // useEffect(() => {
  //   if (newLimit !== 0) {
  //     setIsFetching(true);
  //     return;
  //   }

  //   setIsFetching(false);
  //   setStudentList(slicedStudents);
  // }, [limit, skip, newLimit, slicedStudents, setStudentList]);

  useEffect(() => {
    if (!data || newLimit === 0) {
      setStudentList(slicedStudents);
      return;
    }

    const rebasedList = rebaseDataList(data?.users);
    setStudentList([...slicedStudents, ...rebasedList]);
    // setIsFetching(false);
  }, [data, setStudentList, slicedStudents, newLimit, setIsFetching]);

  // useEffect(() => {
  //   if (!loading) {
  //     setIsFetching(false);
  //   }
  // }, [loading]);

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
