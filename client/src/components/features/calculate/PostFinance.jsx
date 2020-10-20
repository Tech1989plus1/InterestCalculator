import React from 'react';
import { useSelector } from 'react-redux';

const PostFinance = () => {
  const result = useSelector(state => state.financeData);

  return (
    <div>
      <h4>End Balance ${result.endBalance}</h4>
      <p>Total Principal ${result.totalPrincipal}</p>
      <p>Total Interest ${result.totalInterest}</p>
    </div>
  );
}

export default PostFinance;
