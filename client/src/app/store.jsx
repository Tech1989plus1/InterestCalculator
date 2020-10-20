import { configureStore } from '@reduxjs/toolkit';
import calReducer from '../components/features/calculate/calSlice.jsx';

export default configureStore ({
  reducer: {
    principalWithInterest: calReducer
  }
});
