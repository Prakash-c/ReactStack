// expenseReducer.js
const expenseReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_EXPENSE':
        return [...state, action.payload];
      default:
        return state;
    }
  };
  
  export default expenseReducer;
  