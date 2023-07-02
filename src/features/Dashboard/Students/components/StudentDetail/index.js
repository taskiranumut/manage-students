"use client";

import React, { useEffect } from "react";
import styles from "./styles.module.css";
import Card from "@/components/Card";
import StudentForm from "@/features/Dashboard/Students/components/StudentForm";
import { useStudentListContext } from "@/contexts/StudentList/context";

export default function StudentDetail({ isAdd }) {
  const { studentList, setStudentList } = useStudentListContext();

  const emptyFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    imgUrl: "",
    companyName: "",
    website: "",
  };

  return (
    <Card>
      <h2>{isAdd ? "Add New Student" : "Edit Student"}</h2>
      <StudentForm formValues={emptyFormValues} />
    </Card>
  );
}
