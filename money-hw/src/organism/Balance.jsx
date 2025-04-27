import React, { useEffect, useState } from "react";
import css from "./Balance.module.css";
import { getListData } from "./../api/historyApi";

const Balance = ({ refresh }) => {
  const [localIncome, setLocalIncome] = useState([]);
  const [localExpense, setLocalExpense] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getListData();

        let incomeSum = 0;
        let expenseSum = 0;

        data.forEach((item) => {
          if (item.type === "income") {
            incomeSum += item.amount;
          } else if (item.type === "expense") {
            expenseSum += item.amount;
          }
        });

        setLocalIncome(incomeSum);
        setLocalExpense(expenseSum);

        localStorage.setItem("Income", incomeSum);
        localStorage.setItem("Expense", expenseSum);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [refresh]);

  return (
    <div className={css.wrapContainer}>
      <div className={css.balanceContainer}>
        <span className={css.title}>잔액</span>
        <span className={css.number}> </span>
      </div>
      <div className={css.inoutContainer}>
        <div className={css.income}>
          <p className={css.title}>수입</p>
          <p className={css.number}>{localIncome}</p>
        </div>
        <div className={css.expense}>
          <p className={css.title}>지출</p>
          <p className={css.number}>{localExpense}</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
