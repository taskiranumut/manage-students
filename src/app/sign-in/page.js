"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import SignIn from "@/features/Authentication/SignIn";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(undefined);

  useEffect(() => {
    const authStatus = window.sessionStorage.getItem("isAuth") === "true";
    setIsAuth(authStatus);
    if (authStatus) {
      router.replace("/dashboard");
    }
  }, [router]);

  if (isAuth === undefined) return;

  if (isAuth) return;

  return (
    <main className={styles.main}>
      <SignIn />
    </main>
  );
}
