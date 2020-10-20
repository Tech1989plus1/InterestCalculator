import React from 'react';

import Header from './Header.jsx';
import AddFinanceForm from './features/calculate/AddFinanceForm.jsx';
import PostFinance from './features/calculate/PostFinance.jsx';

const App = () => {
  return (
    <div className="App">
      <React.Fragment>
        <Header/>
        <AddFinanceForm/>
        <PostFinance/>
      </React.Fragment>
    </div>
  );
}

export default App;