import { useState } from 'react/cjs/react.development';
import { Link, withRouter } from 'react-router-dom';
import { 
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBInputGroup,
	MDBInputGroupElement,
	MDBInputGroupText 
	} from "mdb-react-ui-kit";

const Signup = () => {
	const [ success, setSuccess ] = useState(null);
	const [ error, setError ] = useState(null);

	// Create user and store in Local Storage
	const createUser = (e) => {
		e.preventDefault();
		let fname = document.getElementById('fname').value,
				mname = document.getElementById('mname').value,
				lname = document.getElementById('lname').value,
				email = document.getElementById('email').value,
				pwd = document.getElementById('password').value;

		let formData = JSON.parse(localStorage.getItem('formData')) || [];

		let exist = formData.length && 
				JSON.parse(localStorage.getItem('formData')).some(data => 
						data.fname.toLowerCase() === fname.toLowerCase() && 
						data.mname.toLowerCase() === mname.toLowerCase() &&
						data.lname.toLowerCase() === lname.toLowerCase()
				);

		if(!exist){
			formData.push({ fname, mname, lname, email, pwd });
			localStorage.setItem('formData', JSON.stringify(formData));
			document.querySelector('form').reset();
			document.getElementById('fname').focus();
			setSuccess(true);
			setError(null);

		} else {
			setError(true);
			setSuccess(null);
		}
	}

	return (
		<MDBContainer className="mt-5">
			<MDBRow className="d-flex justify-content-center mt-5 p-2">
				<h1 className="text-center">Sample Sign up page</h1>
				<MDBCol className="col-md-6 shadow-3 p-3 rounded-3">
					<form className="my-3" onSubmit={(e) => createUser(e)}>
						<h4 className="my-3">Fill up this form to register </h4>

						{/* Flash Messages */}
						{
							error &&
							<div className="alert alert-danger alert-dismissible fade show" role="alert">
								User details already exist
								<button type="button" className="btn-close" data-mdb-dismiss="alert" aria-label="Close" onClick={() => setError(null)}></button>
							</div>
						}
						{
							success && 
							<div class="alert alert-success alert-dismissible fade show" role="alert">
								Account Created! <Link to="/">Click here to Sign in </Link>
								<button type="button" class="btn-close" data-mdb-dismiss="alert" aria-label="Close" onClick={()=> setSuccess(false)}></button>
							</div>
						}
						{/* Flash Messages end */}

						<MDBInputGroup className='mb-3'>
							<MDBInputGroupText noBorder>First Name</MDBInputGroupText>
							<MDBInputGroupElement name="fname" id="fname" className='rounded' type='text' required/>
						</MDBInputGroup>
						<MDBInputGroup className='mb-3'>
							<MDBInputGroupText noBorder>Middle Name</MDBInputGroupText>
							<MDBInputGroupElement name="mname" id="mname" className='rounded' type='text' required/>
						</MDBInputGroup>
						<MDBInputGroup className='mb-3'>
							<MDBInputGroupText noBorder>Last Name</MDBInputGroupText>
							<MDBInputGroupElement name="lname" id="lname" className='rounded' type='text' required/>
						</MDBInputGroup>
						<MDBInputGroup className='mb-3'>
							<MDBInputGroupText noBorder>Email</MDBInputGroupText>
							<MDBInputGroupElement name="email" id="email" className='rounded' type='email' required/>
						</MDBInputGroup>
						<MDBInputGroup className='mb-3'>
							<MDBInputGroupText noBorder>Password</MDBInputGroupText>
							<MDBInputGroupElement name="password" id='password' type='password' required/>
						</MDBInputGroup>
						<div className="d-flex justify-content-end">
							<button type="submit" className="btn btn-primary">Sign Up</button>
						</div>
					</form>
				</MDBCol>
				<p className="mt-4 text-center">Already have an Account? <Link to="/">Sign in here</Link></p>
			</MDBRow>
		</MDBContainer>
	);
};

export default withRouter(Signup);