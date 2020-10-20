import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '0', 
  endBalance: 0, 
  totalPrincipal: 0, 
  totalInterest: 0
};

const financeSlice = createSlice({
  name: 'resultFinancial',
  initialState,
  reducers: {
    postFinanceData(state, action) {
      const financeData = action.payload;
      
      const rate = financeData.rate / 100;
      const total = Number.parseFloat(financeData.principal * (1 + (rate * financeData.years))).toFixed(2);
      const totalInterest = Number.parseFloat(total - financeData.principal).toFixed(2)

      return {endBalance: total, totalPrincipal: financeData.principal, totalInterest:totalInterest};
    }
  }
});

export const { postFinanceData } = financeSlice.actions;

export default financeSlice.reducer;