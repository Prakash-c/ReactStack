// App.js
import React from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import TotalExpense from './components/TotalExpense';

const App = () => {
  return (
    <div>
      <h1>Expenses Calculator</h1>
      <ExpenseForm />
      <ExpenseList />
      <TotalExpense />
    </div>
  );
};

export default App;
