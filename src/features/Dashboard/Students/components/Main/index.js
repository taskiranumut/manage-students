"use client";

import React from "react";
import styles from "./styles.module.css";
import StudentTable from "@/features/Dashboard/Students/components/StudentTable";

export default function Main({ bodyData }) {
  const tableData = {
    headerData: ["", "name", "email", "phone", "website", "company name"],
    bodyData: bodyData,
  };

  return <StudentTable tableData={tableData} />;
}
