import React, { useState, useMemo, useEffect } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Forms/Button";
import Pen from "@/components/Icons/Pen";
import Trash from "@/components/Icons/Trash";
import { useGlobalContext } from "@/contexts/StudentList/context";
import useFetch from "@/hooks/useFetch";
import { baseUrl } from "@/features/Dashboard/Students/api";

export default function TableBodyItem({ itemData }) {
  const { id, imgUrl, studentName, email, phone, website, companyName } =
    itemData;
  const { setRemovedStudents } = useGlobalContext();
  const [url, setUrl] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  const options = useMemo(() => ({ method: "DELETE" }), []);
  const { data, loading, error } = useFetch(url, options, isFetching);

  useEffect(() => {
    if (!data) return;

    if (data.isDeleted) {
      setRemovedStudents((list) => [...list, id]);
      setIsFetching(false);
    }
  }, [data, id, setRemovedStudents]);

  const handleRemove = (id) => {
    const confirmed = window.confirm("Do you want to remove the student?");
    if (!confirmed) return;

    setIsFetching(true);
    setUrl(`${baseUrl}/${id.length > 3 ? 100 : id}`);
  };

  return (
    <li key={id}>
      <div className={styles.imgWrapper}>
        <Image src={imgUrl} alt="profile" fill />
      </div>
      <div>{studentName}</div>
      <div>{email}</div>
      <div>{phone}</div>
      <div>{website}</div>
      <div>{companyName}</div>
      <div className={styles.actions}>
        <Link href={`students/edit-student/${id}`}>
          <Button type="button" btnStyle="icon">
            <span>
              <Pen />
            </span>
          </Button>
        </Link>
        <Button
          type="button"
          btnStyle="icon"
          onClick={() => handleRemove(id)}
          disabled={loading}
        >
          <span>
            <Trash />
          </span>
        </Button>
      </div>
    </li>
  );
}
