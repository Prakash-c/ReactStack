// ExpenseForm.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenseActions';

const ExpenseForm = ({ addExpense }) => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense({ amount: parseFloat(amount), description });
    setAmount('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Amount:
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </label>
      <label>
        Description:
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default connect(null, { addExpense })(ExpenseForm);
