import { useState } from "react";
import { useAddTransaction } from "../../hooks/useAddTransaction";
import styles from "./styles.module.css";

const Latest = () => {
  const { addTransaction } = useAddTransaction();

  const [description, setDescription] = useState("");
  const [transactionAmount, setTransactionAmount] = useState("");
  const [transactionType, setTransactionType] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      description,
      transactionAmount,
      transactionType,
    });

    setDescription("");
    setTransactionAmount("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <section>
          <h1 className={styles.latest__header}>Add Transaction</h1>

          <form onSubmit={onSubmit} className={styles.form}>
            <div className={styles.form__inputs}>
              <div className={styles.form__input}>
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  placeholder="Shopping Grocery"
                  value={description}
                  required
                  onChange={(e) => setDescription(e.target.value)}
                  className={styles.form__description}
                />
              </div>
              <div className={styles.form__input}>
                <label htmlFor="amount">Amount</label>
                <input
                  type="number"
                  placeholder="10000"
                  value={transactionAmount}
                  required
                  onChange={(e) => setTransactionAmount(e.target.value)}
                  className={styles.form__amount}
                  min={1}
                  pattern="[0-9]*"
                />
              </div>
              <div className={styles.form__input}>
                <label htmlFor="type">Transaction Type</label>
                <select
                  value={transactionType}
                  onChange={(e) => setTransactionType(e.target.value)}
                  className={styles.form__select}
                >
                  <option hidden>Choose one</option>
                  <option value="expense">Expense</option>
                  <option value="income">Income</option>
                </select>
              </div>
            </div>

            <button type="submit" className={styles.button}>
              Add Transaction
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Latest;
