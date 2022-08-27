
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login'
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" component={Login} exact />
        <Route path="/dashboard" component={Dashboard} exact />
      </Routes>
    </Router>
  )
}

export default App;
