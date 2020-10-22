import reducer from '../../client/src/components/features/finance/financeSlice.jsx';

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      id: 0, 
      endBalance: 0.00, 
      totalPrincipal: 0.00, 
      totalInterest: 0.00
    })
  })
})