
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login'
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Routes>
    </Router>
  )
}

export default App;
