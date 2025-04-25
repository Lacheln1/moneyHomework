import React from "react";
import css from "./Transaction.module.css";
const Transaction = () => {
  return (
    <div className={css.transactionContainer}>
      <div className={css.formContainer}>
        <p className={css.title}>새로운 거래 추가</p>
        <p className={css.addTitle}>텍스트</p>
        <input
          type="text"
          className={css.inputDes}
          placeholder="내용 입력..."
        />
        <input type="radio" name="type" value="income" />
        수입
        <input type="radio" name="type" value="expense" />
        지출
        <button className={css.addBtn}>거래 추가</button>
      </div>
    </div>
  );
};

export default Transaction;
