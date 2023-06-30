import React from "react";
import styles from "./styles.module.css";
import NavbarItem from "./NavbarItem";
import House from "@/components/Icons/House";
import Bookmark from "@/components/Icons/Bookmark";
import GraduationCap from "@/components/Icons/GraduationCap";
import SquareDollar from "@/components/Icons/SquareDollar";
import FileChartColumn from "@/components/Icons/FileChartColumn";
import SquareSlidersVertical from "@/components/Icons/SquareSlidersVertical";

export default function Navbar() {
  const navbarRoutes = [
    {
      title: "Home",
      path: "/dashboard",
      icon: <House />,
      isActive: true,
    },
    {
      title: "Course",
      path: "#",
      icon: <Bookmark />,
      isActive: false,
    },
    {
      title: "Students",
      path: "/dashboard/students",
      icon: <GraduationCap />,
      isActive: false,
    },
    {
      title: "Payment",
      path: "#",
      icon: <SquareDollar />,
      isActive: false,
    },
    {
      title: "Report",
      path: "#",
      icon: <FileChartColumn />,
      isActive: false,
    },
    {
      title: "Settings",
      path: "#",
      icon: <SquareSlidersVertical />,
      isActive: false,
    },
  ];
  return (
    <nav className={styles.navbar}>
      <ul className={styles.itemList}>
        {navbarRoutes.map(({ title, path, icon, isActive }, i) => (
          <NavbarItem
            key={i}
            title={title}
            path={path}
            icon={icon}
            isActive={isActive}
          />
        ))}
      </ul>
    </nav>
  );
}
