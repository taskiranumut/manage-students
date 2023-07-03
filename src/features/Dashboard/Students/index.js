"use client";

import React, { useEffect, useState, useMemo } from "react";
import styles from "./styles.module.css";
import useFetch from "@/hooks/useFetch";
import { useGlobalContext } from "@/contexts/StudentList/context";
import { rebaseDataList } from "@/features/Dashboard/Students/utils";
import { baseUrl, baseSelect } from "@/features/Dashboard/Students/api";
import Header from "@/features/Dashboard/Students/components/Header";
import Main from "@/features/Dashboard/Students/components/Main";
import Footer from "@/features/Dashboard/Students/components/Footer";

export default function Students() {
  const { studentList, setStudentList, limit, skip, addedStudents } =
    useGlobalContext();

  const [isFetching, setIsFetching] = useState(false);
  const [url, setUrl] = useState("");

  // Kullanıcının eklediği veriler, pagination için slice edilir. Pagination'da önce kullanıcının eklediği veriler servis edilir. Kullanıcının girdiği veriler tüketildiğinde API'den yeni veri çekilir (studentList verisi pagination size'a göre ayarlanarak). Eğer kullanıcı hiç yeni veri eklemediyse ya da eklediği tüm veriler tüketildiyse slicedStudents = [] olur.
  const slicedStudents = useMemo(
    () => addedStudents.slice(skip, limit + skip),
    [addedStudents, limit, skip]
  );

  useEffect(() => {
    if (slicedStudents.length >= limit) {
      setIsFetching(false);
      return;
    }

    setIsFetching(true);
    setUrl(
      `${baseUrl}?limit=${
        limit - slicedStudents.length
      }&skip=${skip}${baseSelect}`
    );
  }, [slicedStudents, limit, skip]);

  const options = useMemo(() => ({ method: "GET", cache: "force-cache" }), []);
  const { data, loading, error } = useFetch(url, options, isFetching);

  useEffect(() => {
    const rebasedList = data ? rebaseDataList(data?.users) : [];
    setStudentList([...slicedStudents, ...rebasedList]);
  }, [data, setStudentList, slicedStudents, limit]);

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
