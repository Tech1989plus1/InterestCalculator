import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { postCalculateData } from './calSlice.jsx';

const AddCalForm = () => {
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
        postCalculateData({
          id: nanoid(),
          principal, 
          rate, 
          years
        })
      );

      setPrincipal('');
      setRate('');
      setYears('');
    }
  }

  return (
    <section>
      <form>
        <label htmlFor="calPrincipal">Starting Principal</label>
        <input type="text" id="calPrincipal" name="calPrincipal" value={principal} onChange={onPrincipalChanged}></input>
        <label htmlFor="calRate">Interest Rate</label>
        <input type="text" id="calRate" name="calRate" value={rate} onChange={onRateChanged}></input>
        <label htmlFor="calYears">Years</label>
        <input type="text" id="calYears" name="calYears" value={years} onChange={onYearsChanged}></input>
        <button type="button" onClick={onCalClicked}>Calculate</button>
      </form>
    </section>
  );
}

export default AddCalForm;
