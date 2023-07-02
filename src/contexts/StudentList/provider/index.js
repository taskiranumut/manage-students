"use client";

import React, { useState } from "react";
import { GlobalContext } from "../context";

export default function GlobalContextProvider({ children }) {
  const [studentList, setStudentList] = useState([]);
  const [limit, setLimit] = useState(5);
  const [skip, setSkip] = useState(0);

  return (
    <GlobalContext.Provider
      value={{ studentList, setStudentList, limit, setLimit, skip, setSkip }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
