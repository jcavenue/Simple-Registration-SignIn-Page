import { withRouter, Redirect, useLocation } from "react-router-dom";

const Dashboard = () => {
	const location = useLocation();
	
	try {
		const { isAuth = false, userDetails = '' } = location.state;
		
		if(!isAuth){
			return <Redirect to="/" />
		}

		return (
		<h1>Hello {userDetails}</h1>
		);
	} catch(err){
		return <Redirect to="/" />
	}	
}

export default withRouter(Dashboard);