import React from "react";
import styles from "./styles.module.css";

export default function FormInput({
  type,
  name,
  placeholder,
  label,
  onChange,
  value,
}) {
  return (
    <div className={styles.group}>
      <label htmlFor="" className={styles.label}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={styles.input}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
