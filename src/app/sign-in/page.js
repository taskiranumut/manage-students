"use client";

import React, { useEffect } from "react";
import styles from "./page.module.css";
import SignIn from "@/features/Authentication/SignIn";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const isAuth = window.sessionStorage.getItem("isAuth") === "true";

  useEffect(() => {
    if (isAuth) {
      router.replace("/dashboard");
    }
  }, [router, isAuth]);

  if (isAuth) return;

  return (
    <main className={styles.main}>
      <SignIn />
    </main>
  );
}
