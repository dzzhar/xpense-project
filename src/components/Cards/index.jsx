import Card from "../Card";
import styles from "./styles.module.css";
import { useGetTransactions } from "../../hooks/useGetTransactions";

const Cards = () => {
  const { transactionTotals } = useGetTransactions();
  const { balance, income, expenses } = transactionTotals;

  //   format uang ke indo
  const formattedBalance = balance.toLocaleString("id-ID");
  const formattedExpense = expenses.toLocaleString("id-ID");
  const formattedIncome = income.toLocaleString("id-ID");

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <section className={styles.cards}>
          <Card title="Balance" amount={formattedBalance} />
          <Card title="Expense" amount={formattedExpense} />
          <Card title="Income" amount={formattedIncome} />
        </section>
      </div>
    </div>
  );
};

export default Cards;
