// TotalExpense.js
import React from 'react';
import { connect } from 'react-redux';

const TotalExpense = ({ total }) => {
  return <p>Total Expenses: ${total}</p>;
};

const mapStateToProps = (state) => ({
  total: state.expenses.reduce((acc, expense) => acc + expense.amount, 0),
});

export default connect(mapStateToProps)(TotalExpense);
