// ExpenseList.js
import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = ({ expenses }) => {
  return (
    <ul>
      {expenses.map((expense, index) => (
        <li key={index}>
          {expense.description}: ${expense.amount}
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  expenses: state.expenses,
});

export default connect(mapStateToProps)(ExpenseList);
