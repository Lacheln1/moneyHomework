import React, { useEffect, useState } from "react";
import css from "./History.module.css";
import HistoryLists from "./HistoryLists";
import { getListData } from "../api/historyApi";
const History = () => {
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getListData();
        setHistoryData(data);
        console.log(data);
        // 수입과 지출 총합 계산
        let income = 0;
        let expense = 0;

        data.forEach((item) => {
          if (item.type === "income") {
            income += item.amount;
          } else if (item.type === "expense") {
            expense += item.amount;
          }
        });

        // 로컬스토리지에 저장
        localStorage.setItem("totalIncome", JSON.stringify(income));
        localStorage.setItem("totalExpense", JSON.stringify(expense));
      } catch (error) {
        console.log("세부내역 업데이트 오류", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className={css.historyContainer}>
      <p className={css.title}>내역</p>
      {/* historyList 받아오기  */}
      <ul>
        {historyData.map((data) => (
          <li key={data.id}>
            <HistoryLists des={data.description} amount={data.amount} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
