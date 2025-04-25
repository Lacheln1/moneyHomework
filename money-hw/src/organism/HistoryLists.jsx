import React from "react";
import css from "./HistoryLists.module.css";
const HistoryLists = ({ data }) => {
  return (
    <div className={css.listContainer}>
      <span className={css.title}>4월용돈</span>
      <span className={css.price}>+300,000</span>
      <div className={css.bar}></div>
    </div>
  );
};

export default HistoryLists;
