import Add from "../AddTransactions";
import Latest from "../LatestTransactions";
import styles from "./styles.module.css";

const Transaction = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__flex}>
        <Latest />
      </div>
      <div className={styles.container__flex}>
        <Add />
      </div>
    </div>
  );
};

export default Transaction;
