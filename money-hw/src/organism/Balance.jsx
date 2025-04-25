import React from "react";
import css from "./Balance.module.css";

const Balance = () => {
  return (
    <section>
      <h1>용돈 기입장</h1>
      <div>
        <div className={css.balanceContainer}>
          <span className={css.title}>잔액</span>
          <span className={css.number}> 200,000</span>
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
    </section>
  );
};

export default Balance;
