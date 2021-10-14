import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Components/login';
import Signup from './Components/signup';
import Dashboard from './Components/dashboard';

function App() {
  return (
    <Router>
			<Switch>
				<Route exact path="/signup" component={Signup}/>
				<Route exact path="/dashboard" component={Dashboard} />	
				<Route exact path="/" component={Login}/>	
			</Switch>
		</Router>
  );
}

export default App;
