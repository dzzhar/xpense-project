import { useGetTransactions } from "../../hooks/useGetTransactions";
import styles from "./styles.module.css";

const Latest = () => {
  const { transactions } = useGetTransactions();
  // console.log(transactions);

  const latestTransactions = [...transactions].reverse();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <section>
          <h1 className={styles.latest__header}>Transactions</h1>
          <div className={styles.detail}>
            {latestTransactions.map((transaction, index) => {
              const { description, transactionAmount, transactionType } =
                transaction;

              const colorBackground =
                transactionType === "income"
                  ? styles.type__income
                  : transactionType === "expense"
                  ? styles.type__expense
                  : "";

              return (
                <div
                  className={`${styles.latest__detail} ${colorBackground}`}
                  key={index}
                >
                  <h3 className={styles.detail__description}>{description}</h3>
                  <div className={styles.detail__transaction}>
                    <p className={styles.detail__type}>{transactionType}</p>
                    <p className={styles.detail__amount}>
                      Rp.
                      {parseFloat(transactionAmount).toLocaleString("id-ID")}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Latest;
