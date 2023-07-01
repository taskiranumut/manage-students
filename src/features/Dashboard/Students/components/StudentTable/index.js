import React from "react";
import styles from "./styles.module.css";
import TableHeaderItem from "@/features/Dashboard/Students/components/StudentTable/TableHeaderItem";
import TableBodyItem from "@/features/Dashboard/Students/components/StudentTable/TableBodyItem";

export default function StudentTable({ tableData }) {
  const { headerData, bodyData } = tableData;

  return (
    <div className={styles.table}>
      <ul className={styles.tableHeader}>
        {headerData.map((item, i) => (
          <TableHeaderItem key={i} data={item} />
        ))}
      </ul>
      <ul className={styles.tableBody}>
        {bodyData.map((data) => (
          <TableBodyItem key={data.id} data={data} />
        ))}
      </ul>
    </div>
  );
}
