import { useState } from "react";
import styles from "./styles.module.css";

export default function Pagination({ total, page, limit, numberCurrentPage, setNumberCurrentPage }) {
  const onChangePage = (next) => {
    const ToltaPage = Math.ceil(total / limit);
    if (numberCurrentPage + next < 0) return;
    if (numberCurrentPage + next >= ToltaPage) return;
    setNumberCurrentPage(numberCurrentPage + next);
  };
  return (
    <div className={styles["c-pagination"]}>
      <button
        className={styles["pagination__button"]}
        onClick={() => onChangePage(-1)}
      >
        Prev
      </button>
      <p className={styles["pagination__number-page"]}>{numberCurrentPage}</p>
      <button
        className={styles["pagination__button"]}
        onClick={() => onChangePage(1)}
      >
        Next
      </button>
    </div>
  );
}
