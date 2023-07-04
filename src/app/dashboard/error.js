"use client";

import React from "react";
import styles from "./error.module.css";
import Link from "next/link";
import Button from "@/components/Forms/Button";

export default function Error() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>something went wrong :(</h1>
      <Link href="/">
        <Button type="button" btnStyle="primary">
          Go Home
        </Button>
      </Link>
    </section>
  );
}
