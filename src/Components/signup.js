import { Link } from 'react-router-dom';

function signUp (e) {
	e.preventDefault();
	let fname = document.getElementById('fname').value,
			lname = document.getElementById('lname').value,
			email = document.getElementById('email').value,
			pwd = document.getElementById('pwd').value;

	let formData = JSON.parse(localStorage.getItem('formData')) || [];

	let exist = formData.length && 
			JSON.parse(localStorage.getItem('formData')).some(data => 
					data.fname.toLowerCase() === fname.toLowerCase() && 
					data.lname.toLowerCase() === lname.toLowerCase()
			);

	if(!exist){
			formData.push({ fname, lname, email, pwd });
			localStorage.setItem('formData', JSON.stringify(formData));
			document.querySelector('form').reset();
			document.getElementById('fname').focus();
			alert("Account Created.\n\nPlease Sign In using the link below.");
	}
	else{
			alert("Ooopppssss... Duplicate found!!!\nYou have already sigjned up");
	}
}


const Signup = () => {
	return (
		<>
			<Link to="/">back</Link>
			<h2>SIGNUP FORM</h2>
			<form onSubmit={(e)=> signUp(e)}>
					<div class="form-group">
						<input type="text" name="fname" id="fname" placeholder="First Name" required/>
					</div>
					<div class="form-group">
						<input type="text" name="lname" id="lname" placeholder="Last Name" required/>
					</div>
					<div class="form-group">
						<input type="email" name="email" id="email" placeholder="Email Address" required/>
					</div>
					<div class="form-group">
						<input type="password" name="pwd" id="pwd" placeholder="Password" required/>
					</div>
					<div class="form-group">
						<button type="submit" >Sign Up</button>
					</div>
			</form>
			<p>Already a member? <a href="/signin.html">Sign In</a></p>
		</>
	);
};

export default Signup;