import { createSlice, nanoid } from '@reduxjs/toolkit';

const startValue = Number(0).toFixed(2);

const initialState = {
  id: 0, 
  endBalance: startValue, 
  totalPrincipal: startValue, 
  totalInterest: startValue
};

const financeSlice = createSlice({
  name: 'resultFinancial',
  initialState,
  reducers: {
    postFinanceData(state, action) {
      const financeData = action.payload;
      
      const rate = financeData.rate / 100;
      const principal = Number(financeData.principal).toFixed(2);
      const total = Number.parseFloat(financeData.principal * (1 + (rate * financeData.years))).toFixed(2);
      const totalInterest = Number.parseFloat(total - financeData.principal).toFixed(2)

      return {id: nanoid(), endBalance: total, totalPrincipal: principal, totalInterest:totalInterest};
    }
  }
});

export const { postFinanceData } = financeSlice.actions;

export default financeSlice.reducer;
