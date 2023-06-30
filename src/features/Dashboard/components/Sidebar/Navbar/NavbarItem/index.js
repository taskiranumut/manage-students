import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";

export default function NavbarItem({ path = "#", icon, title, isActive }) {
  return (
    <li className={styles.itemWrapper}>
      <Link
        href={path}
        className={`${styles.item} ${isActive ? styles.active : ""}`}
      >
        <div className={styles.iconWrapper}>
          <span>{icon}</span>
        </div>
        <span>{title}</span>
      </Link>
    </li>
  );
}
