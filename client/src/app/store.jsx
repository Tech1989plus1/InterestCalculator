import { configureStore } from '@reduxjs/toolkit';
import financeReducer from '../components/features/calculate/financeSlice.jsx';

export default configureStore ({
  reducer: {
    financeData: financeReducer
  }
});
