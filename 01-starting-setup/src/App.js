import { useState } from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
import axios from "axios";

const weather = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=2bfe5bf547d1711c4c173fce24a90b71`).then(res => {}).catch(err => {});
console.log(weather);
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    // date: new Date(2020, 7, 14),
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...expenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses} />
      <div>
        <h1>Weather</h1>
        <p>{weather.data.weather[0].description}</p>
      </div>
    </div>
  );
}

export default App;
