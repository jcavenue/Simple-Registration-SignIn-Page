import { useState } from "react";
import { Link } from "react-router-dom";
import { 
	MDBContainer, 
	MDBRow, 
	MDBCol, 
	MDBInputGroup, 
	MDBInputGroupElement, 
	MDBInputGroupText 
	} from "mdb-react-ui-kit";

const Login = () => {
	const [error, setError ] = useState(null);
	const [success, setSuccess] = useState(false);

	const signIn = (e) => {
		e.preventDefault();

		let email = document.getElementById('email').value;
		let pwd = document.getElementById('password').value;
		let formData = JSON.parse(localStorage.getItem('formData')) || [];
		let exist = formData.length && JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() === email && data.pwd.toLowerCase() === pwd);
		
		if(!exist){
			setError(true);
			setSuccess(false);
		}
		else{
			setSuccess(true);
			setError(false);
		} 
	}

	return (	
		<MDBContainer className="mt-5">
			<MDBRow  className="d-flex justify-content-center mt-5 p-2">
				<h1 className="text-center">Sample Login Page</h1>
				<MDBCol className="col-md-6 shadow-3 p-3 rounded-3">
					<form className="my-3" onSubmit={(e) => signIn(e)}>
						<h4 className="my-3">Please Login </h4>
						{
							error &&
							<div className="alert alert-danger alert-dismissible fade show" role="alert">
								Login Details Incorrect
								<button type="button" className="btn-close" data-mdb-dismiss="alert" aria-label="Close" onClick={() => setError(null)}></button>
							</div>
						}
						{
							success && <p>success</p>
						}
				
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