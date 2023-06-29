import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

export default function Profile({ fullName, userType, imgUrl }) {
  return (
    <section className={styles.profile}>
      <div className={styles.imgWrapper}>
        <Image
          src={imgUrl}
          alt={`${fullName} photo`}
          fill
          priority
          className={styles.profileImg}
        />
      </div>
      <p className={styles.fullName}>{fullName}</p>
      <p className={styles.userType}>{userType}</p>
    </section>
  );
}
