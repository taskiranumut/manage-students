import React from "react";
import styles from "./styles.module.css";
import AppTitle from "@/components/AppTitle";
import Profile from "./Profile";
import Navbar from "./Navbar";
import LogoutButton from "@/features/Authentication/Logout/components/LogoutButton";

export default function Sidebar({ isOpen }) {
  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      <section className={styles.wrapper}>
        <AppTitle size="medium" />
        <Profile
          fullName="John Doe"
          userType="Admin"
          imgUrl="/images/avatar.png"
        />
        <Navbar />
      </section>
      <section className={styles.btnSection}>
        <LogoutButton />
      </section>
    </aside>
  );
}
