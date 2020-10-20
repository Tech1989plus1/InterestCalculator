import React from 'react';

import Header from './Header.jsx';
import AddCalForm from './features/calculate/AddCalForm.jsx'

const App = () => {
  return (
    <div className="App">
      <React.Fragment>
        <Header/>
        <AddCalForm/>
      </React.Fragment>
    </div>
  );
}

export default App;