"use client";

import React, { useEffect } from "react";
import styles from "./styles.module.css";
import Card from "@/components/Card";
import StudentForm from "@/features/Dashboard/Students/components/StudentForm";
import { useStudentListContext } from "@/contexts/StudentList/context";
import { useParams } from "next/navigation";

export default function StudentDetail({ isEdit }) {
  const { studentList } = useStudentListContext();
  const { id } = useParams();

  const formValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    image: "/images/avatar.png",
    company: { name: "" },
    website: "",
  };

  const studentData = isEdit
    ? structuredClone(studentList.find((item) => item.id == id))
    : null;

  if (isEdit && studentData) {
    const { studentName, email, phone, website, imgUrl, companyName } =
      studentData;
    const [first, ...last] = studentName.split(" ");

    formValues.firstName = first;
    formValues.lastName = last.join(" ");
    formValues.email = email;
    formValues.phone = phone;
    formValues.website = website;
    formValues.image = imgUrl;
    formValues.company = { name: companyName };
  }

  return (
    <Card>
      <h2>{!isEdit ? "Add New Student" : "Edit Student"}</h2>
      <StudentForm
        formValues={formValues}
        studentData={studentData}
        isEdit={isEdit}
      />
    </Card>
  );
}
