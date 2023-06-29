import React from "react";
import styles from "./styles.module.css";

export default function CircleCaret({
  rotation = "left",
  width = "18",
  height = "18",
  color = "#C4C4C4",
}) {
  return (
    <svg
      className={styles[rotation]}
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="18" height="18" fill="#E5E5E5" />
      <g id="Dashboard" clipPath="url(#clip0_0_1)">
        <rect
          width="1440"
          height="900"
          transform="translate(-300 -21)"
          fill="#FDFDFD"
        />
        <g id="header">
          <rect
            id="Rectangle 4"
            x="-30"
            y="-21"
            width="1170"
            height="60"
            fill="white"
          />
          <g id="caret-circle-down 1" clipPath="url(#clip1_0_1)">
            <path
              id="Vector"
              d="M17.7188 9C17.7188 4.18359 13.8164 0.28125 9 0.28125C4.18359 0.28125 0.28125 4.18359 0.28125 9C0.28125 13.8164 4.18359 17.7187 9 17.7188C13.8164 17.7188 17.7187 13.8164 17.7188 9ZM9 16.5938C4.82695 16.5938 1.40625 13.2152 1.40625 9C1.40625 4.82695 4.78477 1.40625 9 1.40625C13.173 1.40625 16.5938 4.78477 16.5938 9C16.5938 13.173 13.2152 16.5938 9 16.5938ZM10.125 12.375L6.75 9L10.125 5.625L10.125 12.375ZM11.25 5.625C11.25 4.62656 10.0371 4.12031 9.33047 4.83047L5.95547 8.20547C5.51602 8.64492 5.51602 9.35859 5.95547 9.79805L9.33047 13.173C10.0371 13.8797 11.25 13.3805 11.25 12.3785L11.25 5.625Z"
              fill={color}
            />
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_0_1">
          <rect
            width="1440"
            height="900"
            fill="white"
            transform="translate(-300 -21)"
          />
        </clipPath>
        <clipPath id="clip1_0_1">
          <rect
            width="18"
            height="18"
            fill="white"
            transform="matrix(0 1 -1 0 18 0)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
