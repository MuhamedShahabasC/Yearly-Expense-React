import { useEffect, useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Vacation",
    amount: 5000,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "TV", amount: 1500, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Bike Tyre",
    amount: 4800,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e4",
    title: "Laptop Keyboard",
    amount: 4500,
    date: new Date(2023, 1, 12),
  },
];

const App = () => {
  useEffect(() => {
    document.title = "Yearly Expense";
  }, []);
  
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div>
      <h2 style={{ "text-align": "center", color: "white" }}>Yearly Expense</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;

// useEffect(() => {
//   localStorage.setItem("Yearly-Expense", JSON.stringify(DUMMY_EXPENSES));
// }, [DUMMY_EXPENSES]);

// const getLocalStorageItems = () => {
//   const savedData = localStorage.getItem("Yearly-Expense");
//   const initialValue = JSON.parse(savedData);
//   return initialValue || DUMMY_EXPENSES;
// };
