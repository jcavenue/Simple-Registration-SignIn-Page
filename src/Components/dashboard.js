import { withRouter, Redirect } from "react-router-dom";

const Dashboard = ({isAuth}) => {
	if(!isAuth){
		return <Redirect to="/"/>
	}
	return (
		<h1>Hello</h1>
	);
}

export default withRouter(Dashboard);