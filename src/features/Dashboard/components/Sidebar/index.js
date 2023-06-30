import React from "react";
import styles from "./styles.module.css";
import AppTitle from "@/components/AppTitle";
import Profile from "./Profile";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <section>
        <AppTitle size="medium" />
        <Profile
          fullName="John Doe"
          userType="Admin"
          imgUrl="/images/avatar.png"
        />
      </section>
    </aside>
  );
}
