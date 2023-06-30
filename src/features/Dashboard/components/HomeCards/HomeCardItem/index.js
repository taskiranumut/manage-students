import React from "react";
import styles from "./styles.module.css";

export default function HomeCardItem({
  title,
  value,
  icon,
  cardBg,
  unit = "",
}) {
  return (
    <div className={styles.item} style={{ background: cardBg }}>
      <div className={styles.iconWrapper}>{icon}</div>
      <p className={styles.title}>{title}</p>
      <p className={styles.value}>
        {value}
        {unit && <span className={styles.unit}>{unit}</span>}
      </p>
    </div>
  );
}
