import React from 'react';
import NavBar from './components/navBar';
import {Dashboard} from './components/dashboard';

function App() {
  return (
    <div className="App">
        <NavBar/>
        
          <Dashboard />
        
    </div>
  );
}

export default App;
