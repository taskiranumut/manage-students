import React from "react";
import styles from "./styles.module.css";

export default function FileChartColumn({
  width = "13",
  height = "17",
  color = "#000000",
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="file-chart-line 1" clipPath="url(#clip0_17_18)">
        <path
          id="Vector"
          d="M4.60417 10.625H4.0625C3.91354 10.625 3.79167 10.7445 3.79167 10.8906V14.0781C3.79167 14.2242 3.91354 14.3438 4.0625 14.3438H4.60417C4.75313 14.3438 4.875 14.2242 4.875 14.0781V10.8906C4.875 10.7445 4.75313 10.625 4.60417 10.625ZM6.77083 7.4375H6.22917C6.08021 7.4375 5.95833 7.55703 5.95833 7.70312V14.0781C5.95833 14.2242 6.08021 14.3438 6.22917 14.3438H6.77083C6.91979 14.3438 7.04167 14.2242 7.04167 14.0781V7.70312C7.04167 7.55703 6.91979 7.4375 6.77083 7.4375ZM8.125 9.82812V14.0781C8.125 14.2242 8.24688 14.3438 8.39583 14.3438H8.9375C9.08646 14.3438 9.20833 14.2242 9.20833 14.0781V9.82812C9.20833 9.68203 9.08646 9.5625 8.9375 9.5625H8.39583C8.24688 9.5625 8.125 9.68203 8.125 9.82812ZM12.5227 3.25324L9.68297 0.468164C9.37828 0.169336 8.96526 0 8.53565 0H1.62466C0.727865 0.00332031 0 0.717188 0 1.59674V15.4066C0 16.2861 0.727865 17 1.62466 17H11.3753C12.2721 17 13 16.2861 13 15.4066V4.38182C13 3.96047 12.8273 3.55207 12.5227 3.25324ZM8.66768 1.08209C8.76247 1.10533 8.84711 1.15182 8.9182 1.22154L11.7579 4.00662C11.829 4.07635 11.8764 4.15936 11.9001 4.25232H8.66768V1.08209ZM11.917 15.4066C11.917 15.6988 11.6733 15.9378 11.3753 15.9378H1.62466C1.32674 15.9378 1.08299 15.6988 1.08299 15.4066V1.59674C1.08299 1.30455 1.32674 1.0625 1.62466 1.0625H7.58435V4.51795C7.58435 4.95955 7.94659 5.3125 8.39685 5.3125H11.917V15.4066Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_17_18">
          <rect width="13" height="17" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}