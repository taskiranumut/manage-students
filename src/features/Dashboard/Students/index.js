"use client";

import React, { useEffect, useState, useMemo, useRef } from "react";
import styles from "./styles.module.css";
import useFetch from "@/hooks/useFetch";
import { useGlobalContext } from "@/contexts/StudentList/context";
import { rebaseDataList } from "@/features/Dashboard/Students/utils";
import { baseUrl, baseSelect } from "@/features/Dashboard/Students/api";
import Header from "@/features/Dashboard/Students/components/Header";
import Main from "@/features/Dashboard/Students/components/Main";
import Footer from "@/features/Dashboard/Students/components/Footer";
import NoContent from "./components/NoContent";

export default function Students() {
  const {
    studentList,
    setStudentList,
    limit,
    skip,
    addedStudents,
    editedStudents,
    removedStudents,
    searchQuery,
    setTotal,
  } = useGlobalContext();

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

    if (searchQuery) return;

    setIsFetching(true);
    setUrl(
      `${baseUrl}?limit=${limit - slicedStudents.length}&skip=${
        skip - addedStudents.length < 0 ? skip : skip - addedStudents.length
      }${baseSelect}`
    );
  }, [slicedStudents, limit, skip, addedStudents, searchQuery]);

  const options = useMemo(() => ({ method: "GET", cache: "force-cache" }), []);
  const { data, loading, error } = useFetch(url, options, isFetching);

  useEffect(() => {
    if (!data) return;

    setTotal(data.total);

    const rebasedList = rebaseDataList(data?.users);
    const filteredItems = filterRemovedItems(
      [...slicedStudents, ...rebasedList],
      removedStudents
    );

    const updatedList = updateList(filteredItems, editedStudents);
    setStudentList(updatedList);
  }, [
    data,
    setStudentList,
    slicedStudents,
    limit,
    editedStudents,
    removedStudents,
    setTotal,
  ]);

  useEffect(() => {
    const removeItem = () => {
      setStudentList((list) =>
        list.filter((item) => item.id != removedStudents.at(-1))
      );
    };

    removeItem();
  }, [removedStudents, setStudentList]);

  useEffect(() => {
    if (!searchQuery) return;

    setIsFetching(true);
    setUrl(
      `${baseUrl}/search?q=${searchQuery}&limit=${
        limit - slicedStudents.length
      }&skip=${
        skip - addedStudents.length < 0 ? skip : skip - addedStudents.length
      }`
    );
  }, [searchQuery, skip, limit, addedStudents, slicedStudents]);

  const updateList = (list, editedStudents) => {
    return list.map((item) => {
      const data = editedStudents.find(
        (editedItem) => editedItem.id == item.id
      );
      return data ? { ...data } : item;
    });
  };

  const filterRemovedItems = (list, removedStudents) => {
    return list.filter((item) => !removedStudents.includes(item.id));
  };

  return (
    <>
      <section className={styles.header}>
        <Header title="Student List" />
      </section>
      {loading ? (
        <NoContent text="Loading..." icon={false} />
      ) : studentList.length > 0 ? (
        <>
          <section className={styles.content}>
            <Main bodyData={studentList} />
          </section>
          <section className={styles.footer}>
            <Footer />
          </section>{" "}
        </>
      ) : (
        <NoContent text="There is no student!" />
      )}
    </>
  );
}
