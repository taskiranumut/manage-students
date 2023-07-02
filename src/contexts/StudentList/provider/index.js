"use client";

import React, { useState } from "react";
import { GlobalContext } from "../context";

export default function GlobalContextProvider({ children }) {
  const [studentList, setStudentList] = useState([]);
  const [addedStudents, setAddedStudents] = useState([]);
  const [removedStudents, setRemovedStudents] = useState([]);
  const [limit, setLimit] = useState(5);
  const [skip, setSkip] = useState(0);

  // TODO: make dynamic the value of "100";
  const paginationTotal = 100 + addedStudents.length - removedStudents.length;

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
        removedStudents,
        setRemovedStudents,
        paginationTotal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
