import styles from "./styles.module.css";

const Card = (props) => {
  const { title, amount } = props;

  const bodyClassName =
    title === "Balance"
      ? styles.card__balance
      : title === "Income"
      ? styles.card__income
      : title === "Expense"
      ? styles.card__expense
      : "";

  return (
    <div className={`${styles.card} ${bodyClassName}`}>
      <h1 className={styles.card__title}>{title}</h1>
      <h3 className={styles.card__amount}>Rp. {amount}</h3>
    </div>
  );
};

export default Card;
