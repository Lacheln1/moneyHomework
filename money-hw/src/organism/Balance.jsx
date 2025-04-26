import React, { useEffect, useState } from "react";
import css from "./Balance.module.css";
import { getListData } from "./../api/historyApi";

const Balance = () => {
  // 잔액
  let balance = 0;

  let totalIncome = JSON.parse(localStorage.getItem("totalIncome")) || 0;
  let totalExpense = JSON.parse(localStorage.getItem("totalExpense")) || 0;

  const calc = (income, expense) => {
    return balance + income - expense;
  };
  return (
    <div className={css.wrapContainer}>
      <div className={css.balanceContainer}>
        <span className={css.title}>잔액</span>
        <span className={css.number}> {calc(totalIncome, totalExpense)}</span>
      </div>
      <div className={css.inoutContainer}>
        <div className={css.income}>
          <p className={css.title}>수입</p>
          <p className={css.number}>{totalIncome}</p>
        </div>
        <div className={css.expense}>
          <p className={css.title}>지출</p>
          <p className={css.number}>{totalExpense}</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
