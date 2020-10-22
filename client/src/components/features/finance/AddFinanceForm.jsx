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

  const onResetClicked = () => {
    dispatch(
      postFinanceData({
        id: nanoid(),
        principal: 0,
        rate: 0, 
        years: 0 
      })
    );

    setPrincipal('');
    setRate('');
    setYears('');
  }

  return (
    <section id="leftColumn">
      <form id="formFlex">
        <label htmlFor="financePrincipal">Starting Principal</label>
        <input 
          type="number" 
          id="financePrincipal" 
          name="financePrincipal"
          value={principal} 
          onChange={onPrincipalChanged}
        ></input>
        <label htmlFor="financeRate">Interest Rate</label>
        <input 
          type="number" 
          id="financeRate" 
          name="financeRate" 
          value={rate} 
          onChange={onRateChanged}
        ></input>
        <label htmlFor="financeYears">Years</label>
        <input 
          type="number" 
          id="financeYears" 
          name="financeYears" 
          value={years} 
          onChange={onYearsChanged}
        ></input>
        <div>
          <button type="button" onClick={onCalClicked}>Calculate</button>
          <button type="button" onClick={onResetClicked}>Reset</button>
        </div>
      </form>
    </section>
  );
}

export default AddFinanceForm;
