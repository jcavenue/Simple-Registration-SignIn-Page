import { withRouter, Redirect, useLocation, Link } from "react-router-dom";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";

const Dashboard = () => {
	const location = useLocation();
	
	try {
		const { isAuth , userData  } = location.state;
		
		if(!isAuth){
			return <Redirect to="/" />
		}

		return (
			<MDBContainer className="py-5">
				<MDBRow className="px-3">
					<h1>Welcome to your Dashboard</h1>
					<p>Account: {userData.email} <Link to="/">Logout</Link></p>
				</MDBRow>
			</MDBContainer>
		);
	} catch(err){
		return <Redirect to="/" />
	}	
}

export default withRouter(Dashboard);