import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { postFinanceData } from './financeSlice.jsx';

const AddFinanceForm = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');

  const dispatch = useDispatch();

  const onPrincipalChanged = e => setPrincipal(e.target.value);
  const onRateChanged = e => setRate(e.target.value);
  const onYearsChanged = e => setYears(e.target.value);


  const onCalClicked = () => {
    if (principal && rate && years) {
      dispatch(
        postFinanceData({
          id: nanoid(),
          principal, 
          rate, 
          years
        })
      );
    }
  }

  return (
    <section>
      <form>
        <label htmlFor="calPrincipal">Starting Principal</label>
        <input 
          type="number" 
          id="financePrincipal" 
          name="financePrincipal"
          value={principal} 
          onChange={onPrincipalChanged}
        ></input>
        <label htmlFor="calRate">Interest Rate</label>
        <input 
          type="number" 
          id="financeRate" 
          name="financeRate" 
          value={rate} 
          onChange={onRateChanged}
        ></input>
        <label htmlFor="calYears">Years</label>
        <input 
          type="number" 
          id="financeYears" 
          name="financeYears" 
          value={years} 
          onChange={onYearsChanged}
        ></input>
        <button type="button" onClick={onCalClicked}>Calculate</button>
      </form>
    </section>
  );
}

export default AddFinanceForm;
