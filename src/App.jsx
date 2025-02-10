import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Landingp from './component/landing2';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingp />} />
        
      </Routes>
    </Router>
  );
};

export default App;
