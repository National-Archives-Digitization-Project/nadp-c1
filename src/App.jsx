
import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login'
import Dashboard from './components/Dashboard';

const App = () => {
  const [initialState, setInitialState] = useState([]);

  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" index element={<Login />} />
          <Route path="/dashboard/" element={<Dashboard />} />
        </Routes>
      </Router>
    </Fragment>
  )
}

export default App;
