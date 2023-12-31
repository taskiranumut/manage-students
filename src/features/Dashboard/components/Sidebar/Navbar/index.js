"use client";

import React from "react";
import { usePathname } from "next/navigation";
import styles from "./styles.module.css";
import NavbarItem from "./NavbarItem";
import House from "@/components/Icons/House";
import Bookmark from "@/components/Icons/Bookmark";
import GraduationCap from "@/components/Icons/GraduationCap";
import SquareDollar from "@/components/Icons/SquareDollar";
import FileChartColumn from "@/components/Icons/FileChartColumn";
import SquareSlidersVertical from "@/components/Icons/SquareSlidersVertical";

export default function Navbar() {
  const pathname = usePathname();

  const isActivePath = (currentPath, itemPath) => {
    if (itemPath === "/dashboard") {
      return currentPath === itemPath;
    }
    return currentPath.startsWith(itemPath);
  };

  const navbarRoutes = [
    {
      title: "Home",
      path: "/dashboard",
      icon: <House />,
    },
    {
      title: "Course",
      path: "#",
      icon: <Bookmark />,
    },
    {
      title: "Students",
      path: "/dashboard/students",
      icon: <GraduationCap />,
    },
    {
      title: "Payment",
      path: "#",
      icon: <SquareDollar />,
    },
    {
      title: "Report",
      path: "#",
      icon: <FileChartColumn />,
    },
    {
      title: "Settings",
      path: "#",
      icon: <SquareSlidersVertical />,
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
            isActive={isActivePath(pathname, path)}
          />
        ))}
      </ul>
    </nav>
  );
}
