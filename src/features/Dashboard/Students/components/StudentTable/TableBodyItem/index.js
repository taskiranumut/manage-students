import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Forms/Button";
import Pen from "@/components/Icons/Pen";
import Trash from "@/components/Icons/Trash";

export default function TableBodyItem({ data }) {
  const { id, imgUrl, studentName, email, phone, website, companyName } = data;

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
        <Link href={`edit-student/${id}`}>
          <Button type="button" btnStyle="icon">
            <span>
              <Pen />
            </span>
          </Button>
        </Link>
        <Button type="button" btnStyle="icon">
          <span>
            <Trash />
          </span>
        </Button>
      </div>
    </li>
  );
}
