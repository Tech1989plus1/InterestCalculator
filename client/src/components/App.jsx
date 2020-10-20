import React from 'react';

import Header from './Header.jsx';
import AddCalForm from './features/calculate/AddCalForm.jsx';
import PostCal from './features/calculate/PostCal.jsx';

const App = () => {
  return (
    <div className="App">
      <React.Fragment>
        <Header/>
        <AddCalForm/>
        <PostCal/>
      </React.Fragment>
    </div>
  );
}

export default App;