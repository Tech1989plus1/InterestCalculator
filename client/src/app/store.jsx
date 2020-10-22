import { configureStore } from '@reduxjs/toolkit';
import financeReducer from '../components/features/finance/financeSlice.jsx';

export default configureStore ({
  reducer: {
    financeData: financeReducer
  }
});
