import css from "./HistoryLists.module.css";

const HistoryLists = ({ des, amount }) => {
  return (
    <div className={css.listContainer}>
      <span className={css.title}>{des}</span>
      <span className={css.price}>{amount}</span>
      <div className={css.bar}></div>
    </div>
  );
};

export default HistoryLists;
