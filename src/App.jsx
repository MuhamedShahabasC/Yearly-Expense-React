import { useEffect, useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import expensesIMG from "./assets/expenses-title.png";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    let savedExpenses = localStorage.getItem("Yearly-Expenses");
    if (savedExpenses) {
      setExpenses(() => JSON.parse(savedExpenses));
    }
  }, []);

  const addExpenseHandler = (expense) => {
    const newExpenses = [...expenses, expense];
    localStorage.setItem("Yearly-Expenses", JSON.stringify(newExpenses));
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <>
      <div className="title">
        <h1>Yearly Expenses Tracker</h1>
        <img
          src={expensesIMG}
          width="40px"
          height="40px"
          alt="Yearly Expenses"
        />
      </div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </>
  );
};

export default App;
