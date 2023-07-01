import React from "react";
import styles from "./styles.module.css";
import Form from "@/components/Forms/Form";
import Angle from "../Icons/Angle";
import Button from "../Forms/Button";

export default function Pagination() {
  return (
    <div className={styles.container}>
      <Form>
        <label className={styles.text}>Rows per page:</label>
        <select className={styles.rowSelect}>
          <option value="5">5</option>
          <option value="25">25</option>
          <option value="100">100</option>
          <option value="250">250</option>
        </select>
      </Form>
      <div className={styles.pageNums}>
        <p className={styles.text}>1-5 of 1240</p>
        <div className={styles.actions}>
          <Button type="button" btnStyle="icon">
            <span>
              <Angle rotation="left" />
            </span>
          </Button>
          <Button type="button" btnStyle="icon">
            <span>
              <Angle rotation="right" />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
