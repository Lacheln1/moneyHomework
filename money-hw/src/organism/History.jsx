import React from "react";
import css from "./History.module.css";
import HistoryLists from "./HistoryLists";
const History = () => {
  return (
    <div className={css.historyContainer}>
      <p className={css.title}>내역</p>

      {/* historyList 받아오기  */}
      <ul>
        <li>
          <HistoryLists />
        </li>
        <li>
          <HistoryLists />
        </li>
        <li>
          <HistoryLists />
        </li>
      </ul>
    </div>
  );
};

export default History;
