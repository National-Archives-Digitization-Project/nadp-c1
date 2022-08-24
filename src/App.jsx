
import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";
import Login from './components/Login'
import Dashboard from './components/Dashboard';

const App = () => {
  const [initialState, setInitialState] = useState([]);

  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/" index={true} component={Login} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  )
}

export default App;
