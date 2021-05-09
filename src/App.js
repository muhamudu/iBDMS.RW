// Login
import Login from './login-compmonent/Login';
import ForgotPassword from './login-compmonent/ForgotPassword';
import Dashboard from './hr-account/pages/Dashboard';
import Departement from './hr-account/pages/Departement';
import Employees from './hr-account/pages/Employees';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/ForgotPassword" exact component={ForgotPassword} />
        <Route path="/Dashboard" exact component={Dashboard} />
        <Route path="/Departement" exact component={Departement} />
        <Route path="/Employees" exact component={Employees} />
      </Switch>
    </Router>

  );
}
export default App;
