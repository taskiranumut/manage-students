"use client";

import React, { useState } from "react";
import { StudentListContext } from "../context";

export default function StudentListProvider({ children }) {
  const [studentList, setStudentList] = useState([]);

  return (
    <StudentListContext.Provider value={{ studentList, setStudentList }}>
      {children}
    </StudentListContext.Provider>
  );
}
