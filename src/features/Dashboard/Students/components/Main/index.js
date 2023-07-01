import React from "react";
import styles from "./styles.module.css";
import StudentTable from "@/features/Dashboard/Students/components/StudentTable";

export default function Main() {
  const tableData = {
    headerData: ["", "name", "email", "phone", "website", "company name"],
    bodyData: [
      {
        id: "1",
        imgUrl: "/images/avatar.png",
        studentName: "John Doe 1",
        email: "john@gmail.com",
        phone: "7305477760",
        website: "karthi.lorem.com",
        companyName: "karthi.lorem.com",
      },
      {
        id: "2",
        imgUrl: "/images/avatar.png",
        studentName: "John Doe 2",
        email: "john@gmail.com",
        phone: "7305477760",
        website: "karthi.lorem.com",
        companyName: "karthi.lorem.com",
      },
      {
        id: "3",
        imgUrl: "/images/avatar.png",
        studentName: "John Doe 3",
        email: "john@gmail.com",
        phone: "7305477760",
        website: "karthi.lorem.com",
        companyName: "karthi.lorem.com",
      },
      {
        id: "4",
        imgUrl: "/images/avatar.png",
        studentName: "John Doe 4",
        email: "john@gmail.com",
        phone: "7305477760",
        website: "karthi.lorem.com",
        companyName: "karthi.lorem.com",
      },
      {
        id: "5",
        imgUrl: "/images/avatar.png",
        studentName: "John Doe 5",
        email: "john@gmail.com",
        phone: "7305477760",
        website: "karthi.lorem.com",
        companyName: "karthi.lorem.com",
      },
    ],
  };

  return <StudentTable tableData={tableData} />;
}
