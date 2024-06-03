import "./styles.css";
import Header from "../../components/Header";
import Cards from "../../components/Cards";
import Transaction from "../../components/Transaction";
import Footer from "../../components/Footer";

export const ExpenseTracker = () => {
  return (
    <>
      <Header />
      <Cards />
      <main>
        <Transaction />
      </main>
      <Footer />
    </>
  );
};
