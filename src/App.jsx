
import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login'
import Dashboard from './components/Dashboard';

const App = () => {
  const [initialState, setInitialState] = useState([]);
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" component={Login} />
          <Route path="/dashboard/" exact component={Dashboard} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}

export default App;
