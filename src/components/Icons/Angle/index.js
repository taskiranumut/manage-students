import React from "react";
import styles from "./styles.module.css";

export default function Angle({
  rotation = "left",
  width = "24",
  height = "24",
  color = "#9FA2B4",
}) {
  return (
    <svg
      className={styles[rotation]}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icon / arrow - left">
        <path
          id="left"
          d="M15 18L9.07071 12.0707C9.03166 12.0317 9.03166 11.9683 9.07071 11.9293L15 6"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
