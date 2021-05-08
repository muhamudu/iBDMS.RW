// Login
import Login from './login-compmonent/Login';
import ForgotPassword from './login-compmonent/ForgotPassword';

// App CSS
// import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} exact={true} />
        <Route path="/ForgotPassword" exact component={ForgotPassword} />
      </Switch>
      
    </Router>

  );
}

export default App;
