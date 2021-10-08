import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Components/login';
import Signup from './Components/signup';

function App() {
  return (
    <Router>
			<Switch>
				<Route path="/signup" component={Signup}/>
				<Route exact path="/" component={Login}/>		
			</Switch>
		</Router>
  );
}

export default App;
