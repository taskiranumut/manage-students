"use client";

import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import AppTitle from "@/components/AppTitle";
import Card from "@/components/Card";
import SignInForm from "./components/SignInForm";

export default function SignIn() {
  return (
    <Card>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <AppTitle size="xxlarge" />
        </div>
        <h2 className={styles.formTitle}>Sign In</h2>
        <p className={styles.formInfo}>
          Enter your credentials to access your account
        </p>
      </div>
      <SignInForm />
      <div className={styles.footer}>
        <p className={styles.footerText}>
          Forgot your password?{" "}
          <Link href="#" className={styles.link}>
            Reset Password
          </Link>
        </p>
      </div>
    </Card>
  );
}
