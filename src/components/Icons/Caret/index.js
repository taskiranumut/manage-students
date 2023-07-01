import React from "react";
import styles from "./styles.module.css";

export default function Caret({
  rotation = "down",
  width = "12",
  height = "12",
  color = "#9FA2B4",
}) {
  return (
    <svg
      className={styles[rotation]}
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icon / dropdown">
        <path
          id="Vector"
          d="M2.98351 4.5H9.01398C9.43117 4.5 9.63976 5.00391 9.34445 5.29922L6.33039 8.31562C6.14757 8.49844 5.84992 8.49844 5.66711 8.31562L2.65304 5.29922C2.35773 5.00391 2.56632 4.5 2.98351 4.5Z"
          fill={color}
        />
      </g>
    </svg>
  );
}
