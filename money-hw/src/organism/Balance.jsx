import React, { useEffect, useState } from "react";
import css from "./Balance.module.css";
import { getListData } from "./../api/historyApi";

const Balance = () => {
  // 잔액
  const [balance, setBalance] = useState(200000);

  return (
    <div className={css.wrapContainer}>
      <div className={css.balanceContainer}>
        <span className={css.title}>잔액</span>
        <span className={css.number}> {balance}</span>
      </div>
      <div className={css.inoutContainer}>
        <div className={css.income}>
          <p className={css.title}>수입</p>
          <p className={css.number}>300,000</p>
        </div>
        <div className={css.expense}>
          <p className={css.title}>지출</p>
          <p className={css.number}>100,000</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
