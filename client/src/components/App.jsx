import React from 'react';

import Header from './features/header/Header.jsx';
import AddFinanceForm from './features/finance/AddFinanceForm.jsx';
import PostFinance from './features/finance/PostFinance.jsx';

const App = () => {
  return (
    <div className="App">
      <React.Fragment>
        <Header/>
        <section className="flex">
          <AddFinanceForm/>
          <PostFinance/>
        </section>
      </React.Fragment>
    </div>
  );
}

export default App;