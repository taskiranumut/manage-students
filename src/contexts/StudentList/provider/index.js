"use client";

import React, { useState } from "react";
import { GlobalContext } from "../context";

export default function GlobalContextProvider({ children }) {
  const [studentList, setStudentList] = useState([]);

  return (
    <GlobalContext.Provider
    >
      {children}
    </GlobalContext.Provider>
  );
}
