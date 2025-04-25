import React from "react";
import css from "./History.module.css";
const History = () => {
  return (
    <div className={css.historyContainer}>
      <p className={css.title}>내역</p>
      <ul>{/* historyList 받아오기  */}</ul>
    </div>
  );
};

export default History;
