import React from "react";
import styles from "./styles.module.css";
import HomeCardItem from "./HomeCardItem";
import GraduationCap from "@/components/Icons/GraduationCap";
import Bookmark from "@/components/Icons/Bookmark";
import SquareDollar from "@/components/Icons/SquareDollar";
import User from "@/components/Icons/User";

export default function HomeCards() {
  const cardData = [
    {
      title: "students",
      value: "243",
      icon: <GraduationCap width="48" height="38" color="#74C1ED" />,
      cardBg: "#F0F9FF",
    },
    {
      title: "course",
      value: "13",
      icon: <Bookmark width="28" height="35" color="#EE95C5" />,
      cardBg: "#FEF6FB",
    },
    {
      title: "payments",
      value: "556,000",
      unit: "₺",
      icon: <SquareDollar width="35" height="40" color="#F6C762" />,
      cardBg: "#FEFBEC",
    },
    {
      title: "user",
      value: "3",
      icon: <User width="34" height="34" color="#FFFFFF" />,
      cardBg: "var(--color-primary-gradient)",
    },
  ];

  return (
    <div className={styles.gridContainer}>
      {cardData.map((data, i) => (
        <HomeCardItem key={i} {...data} />
      ))}
    </div>
  );
}
