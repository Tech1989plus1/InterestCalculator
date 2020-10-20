import React from 'react';
import { useSelector } from 'react-redux';

const PostCal = () => {
  const post = useSelector(state => state.principalWithInterest);

  const rate = post.rate / 100;
  const total = post.principal * (1 + (rate * post.years))

  return (
  <h1>{total}</h1>
  )
}

export default PostCal;
