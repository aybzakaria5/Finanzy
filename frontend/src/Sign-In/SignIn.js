import React from 'react';
import './SignIn.css'; // Import your CSS file for styling

const SignIn = () => {
  const handleSignIn = (event) => {
    event.preventDefault();
    // Add your sign-in logic here
    // You can use state or refs to get input field values
    // Example:
    // const email = emailRef.current.value;
    // const password = passwordRef.current.value;
    // Perform authentication, API calls, etc.
  };

  const handleGoogleSignIn = () => {
    // Implement Google sign-in logic here
    // You can use a library like Firebase Authentication for this
    console.log('Sign in with Google clicked');
  };

  const handleFacebookSignIn = () => {
    // Implement Facebook sign-in logic here
    // You can use Facebook SDK or a library like React Facebook Login for this
    console.log('Sign in with Facebook clicked');
  };

  return (
    <div className="sign-in-container">
      <h2>Sign In</h2>
      <form className="sign-in-form" onSubmit={handleSignIn}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />

        <button type="submit" className="sign-in-button">Sign In</button>
      </form>

      <div className="alternative-sign-in">
        <p>Or sign in with:</p>
        <button className="google-sign-in" onClick={handleGoogleSignIn}>
          Sign in with Google
        </button>
        <button className="facebook-sign-in" onClick={handleFacebookSignIn}>
          Sign in with Facebook
        </button>
      </div>
    </div>
  );
};

export default SignIn;
