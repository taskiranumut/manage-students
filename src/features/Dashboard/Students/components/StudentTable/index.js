import React from "react";
import styles from "./styles.module.css";
import TableHeaderItem from "@/features/Dashboard/Students/components/StudentTable/TableHeaderItem";
import TableBodyItem from "@/features/Dashboard/Students/components/StudentTable/TableBodyItem";
import { useGlobalContext } from "@/contexts/StudentList/context";

export default function StudentTable({ tableData }) {
  const { headerData, bodyData } = tableData;
  const { limit } = useGlobalContext();

  return (
    <div className={styles.table}>
      <ul className={styles.tableHeader}>
        {headerData.map((item, i) => (
          <TableHeaderItem key={i} data={item} />
        ))}
      </ul>
      <ul className={styles.tableBody}>
        {bodyData.slice(0, limit).map((data) => (
          <TableBodyItem key={data.id} data={data} />
        ))}
      </ul>
    </div>
  );
}
