import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { 
	MDBContainer, 
	MDBRow, 
	MDBCol, 
	MDBInputGroup, 
	MDBInputGroupElement, 
	MDBInputGroupText 
	} from "mdb-react-ui-kit";

const Login = () => {
	let history = useHistory();
	const [error, setError ] = useState(null);

	// Authenticate User if exist
	const authenticate = (e) => {
		e.preventDefault();
		let email = document.getElementById('email').value;
		let pwd = document.getElementById('password').value;
		let formData = JSON.parse(localStorage.getItem('formData')) || [];
		let exist = formData.length && JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() === email && data.pwd.toLowerCase() === pwd);
		
		if(!exist){
			setError(true);
		} else {
			const data = formData.filter(data => data.email === email && data.pwd === pwd);
			formData = [];
			// Redirect user to dashboard if authenticated
			history.push({
				pathname: '/dashboard',
				state: { isAuth: true, userData: data[0]}
			})
		} 
	}

	return (	
		<MDBContainer className="mt-5">
			<MDBRow  className="d-flex justify-content-center mt-5 p-2">
				<h1 className="text-center">Simple Login Page</h1>
				<MDBCol className="col-md-6 shadow-3 p-3 rounded-3">
					<form className="my-3" onSubmit={(e) => authenticate(e)}>
						<h4 className="my-3">Please Login </h4>
						
						{/* Flash Message error */}
						{
							error &&
							<div className="alert alert-danger alert-dismissible fade show" role="alert">
								Login Details Incorrect
								<button type="button" className="btn-close" data-mdb-dismiss="alert" aria-label="Close" onClick={() => setError(null)}></button>
							</div>
						}
						{/* Flash Message error end */}
						
						<MDBInputGroup className='mb-3'>
							<MDBInputGroupText noBorder>Email</MDBInputGroupText>
							<MDBInputGroupElement name="email" id="email" className='rounded' type='email' required/>
						</MDBInputGroup>
						<MDBInputGroup className='mb-3'>
							<MDBInputGroupText noBorder>Password</MDBInputGroupText>
							<MDBInputGroupElement name="password" id='password' type='password' required/>
						</MDBInputGroup>
						<div className="d-flex justify-content-end">	
							<button type="submit" className="btn btn-primary">Sign In</button>
						</div>
					</form>
				</MDBCol>
				<p className="text-center mt-4"> Don't have an account yet? <Link to="/signup">Sign up here</Link></p>
			</MDBRow>
		</MDBContainer>
	);
}

export default Login;