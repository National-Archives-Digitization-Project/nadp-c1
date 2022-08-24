
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login'
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </Routes>
    </Router>
  )
}

export default App;
