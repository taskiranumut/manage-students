"use client";

import { createContext, useContext } from "react";

export const StudentListContext = createContext();
export const useStudentListContext = () => useContext(StudentListContext);
