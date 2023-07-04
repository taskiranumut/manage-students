import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";
import { useGlobalContext } from "@/contexts/StudentList/context";

export default function NavbarItem({ path = "#", icon, title, isActive }) {
  const { setIsOpen } = useGlobalContext();

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <li className={styles.itemWrapper}>
      <Link
        href={path}
        className={`${styles.item} ${isActive ? styles.active : ""}`}
        onClick={handleClose}
      >
        <div className={styles.iconWrapper}>
          <span>{icon}</span>
        </div>
        <span>{title}</span>
      </Link>
    </li>
  );
}
