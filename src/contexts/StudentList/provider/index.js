"use client";

import React, { useState } from "react";
import { GlobalContext } from "../context";

export default function GlobalContextProvider({ children }) {
  const [studentList, setStudentList] = useState([]);
  const [addedStudents, setAddedStudents] = useState([]);
  const [editedStudents, setEditedStudents] = useState([]);
  const [removedStudents, setRemovedStudents] = useState([]);
  const [limit, setLimit] = useState(5);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const paginationTotal = total + addedStudents.length - removedStudents.length;

  return (
    <GlobalContext.Provider
      value={{
        studentList,
        setStudentList,
        limit,
        setLimit,
        skip,
        setSkip,
        addedStudents,
        setAddedStudents,
        editedStudents,
        setEditedStudents,
        removedStudents,
        setRemovedStudents,
        paginationTotal,
        searchQuery,
        setSearchQuery,
        setTotal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
