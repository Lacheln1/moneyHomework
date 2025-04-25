import React, { useEffect, useState } from "react";
import css from "./HistoryLists.module.css";
import { getListData } from "../api/historyApi";
const HistoryLists = () => {
  const [historyData, setHistoryData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getListData();
        setHistoryData(data);
        console.log(data);
      } catch (error) {
        console.log("세부내역 업데이트 오류", error);
      }
    };
    fetchData;
  }, []);
  return (
    <div className={css.listContainer}>
      {historyData.map((data) => (
        <div>
          <span className={css.title}>{data.description}</span>
          <span className={css.price}>{data.amount}</span>
          <div className={css.bar}></div>
        </div>
      ))}
    </div>
  );
};

export default HistoryLists;
