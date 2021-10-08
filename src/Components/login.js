import { 
	MDBContainer, 
	MDBRow, 
	MDBCol, 
	MDBInputGroup, 
	MDBInputGroupElement, 
	MDBInputGroupText 
	} from "mdb-react-ui-kit";

const Login = () => {


	return (	
		<MDBContainer className="mt-5">
			<MDBRow  className="d-flex justify-content-center mt-5 p-2">
				<h1 className="text-center">Sample Login Page</h1>
				<MDBCol className="col-md-6 shadow-3 p-3 rounded-3">
					<form className="my-3">
						<h4 className="my-3">Please Login </h4>
						<MDBInputGroup className='mb-3'>
							<MDBInputGroupText noBorder>Email</MDBInputGroupText>
							<MDBInputGroupElement name="email" className='rounded' id='basic-url' type='email' required/>
						</MDBInputGroup>
						<MDBInputGroup className='mb-3'>
							<MDBInputGroupText noBorder>Password</MDBInputGroupText>
							<MDBInputGroupElement name="password"className='rounded' id='basic-url' type='password' required/>
						</MDBInputGroup>
						<button type="submit" className="btn btn-primary">Sign In</button>
					</form>
					<p> Don't have an account yet? <a href="#">Sign up here</a></p>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	);
}

export default Login;