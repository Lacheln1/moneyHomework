import React, { useState } from "react";
import css from "./Transaction.module.css";
import History from "./History";
import axios from "axios";
import { addListData } from "../api/historyApi";
const Transaction = () => {
  const [type, setType] = useState("");
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const handleEvent = (e) => {
    setType(e.target.value);
  };

  return (
    <div className={css.transactionContainer}>
      <div className={css.formContainer}>
        <p className={css.title}>새로운 거래 추가</p>
        <p className={css.addTitle}>텍스트</p>
        <input
          type="text"
          className={css.inputDes}
          placeholder="내용 입력..."
          onChange={(e) => setText(e.target.value)}
        />
        <input type="radio" name="type" value="income" onChange={handleEvent} />
        수입
        <input
          type="radio"
          name="type"
          value="expense"
          onChange={handleEvent}
        />
        지출
        <input
          type="text"
          className={css.inputDes}
          placeholder="금액 입력..."
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          className={css.addBtn}
          onClick={() => addListData(text, type, amount)}
        >
          거래 추가
        </button>
      </div>

      {/*trsCon에 flex스타일 주고 아래에  history 컴포넌트 불러올예정 */}
      <History />
    </div>
  );
};

export default Transaction;
