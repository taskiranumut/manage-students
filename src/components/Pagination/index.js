import React from "react";
import styles from "./styles.module.css";
import Form from "@/components/Forms/Form";
import Angle from "../Icons/Angle";
import Button from "../Forms/Button";
import { useGlobalContext } from "@/contexts/StudentList/context";

export default function Pagination() {
  const { limit, setLimit, skip, setSkip } = useGlobalContext();

  // TODO: make dynamic the total number
  const total = 100;

  const handleChange = (e) => {
    setLimit(Number(e.target.value));
  };

  const handleNext = () => {
    setSkip((skip) =>
      skip + limit <= total - limit ? skip + limit : total - limit
    );
  };

  const handlePrevious = () => {
    setSkip((skip) => (skip - limit >= 0 ? skip - limit : 0));
  };

  return (
    <div className={styles.container}>
      <Form>
        <label className={styles.text}>Rows per page:</label>
        <select
          className={styles.rowSelect}
          onChange={handleChange}
          value={limit}
        >
          <option value="5">5</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </Form>
      <div className={styles.pageNums}>
        <p className={styles.text}>
          {skip + 1}-{total - skip < limit ? total : limit + skip} of {total}
        </p>
        <div className={styles.actions}>
          <Button
            type="button"
            btnStyle="icon"
            onClick={handlePrevious}
            disabled={skip === 0}
          >
            <span>
              <Angle rotation="left" />
            </span>
          </Button>
          <Button
            type="button"
            btnStyle="icon"
            onClick={handleNext}
            disabled={skip === total - limit}
          >
            <span>
              <Angle rotation="right" />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
