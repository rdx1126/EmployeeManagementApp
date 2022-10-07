import React, { useDebugValue, useState } from "react"
import Alert from 'react-bootstrap/Alert';
import './Auth.css'

export default function (props) {
  let [authMode, setAuthMode] = useState("signin");
  let [errorMessage,setErrorMessage] = useState('No Error');
  let [passwordStatus,setPasswordStatus] = useState('NA');
  let initailUserDetails={
    userName: "",
    userEmail: "",
    userPassword: "",
    userType: "Admin"
  };

  const [userDetails,setUserDetails] = useState(initailUserDetails);

  const changeAuthMode = () => {
    setUserDetails(initailUserDetails);
    setErrorMessage('No Error');
    setPasswordStatus('NA');
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  const handleNameChange=(event) =>{
    if(event.target.value.length > 0)
      setErrorMessage('No Error');
    setUserDetails({...userDetails,userName: event.target.value});
  };
  const handleEmailChange=(event) =>{
    if(event.target.value.length > 0){
      setErrorMessage('No Error');
      setPasswordStatus('NA');
    }
    setUserDetails({...userDetails,userEmail: event.target.value});
  };
  const handlePasswordChange=(event) =>{
    if(event.target.value.length > 0)
      setErrorMessage('No Error');
    setUserDetails({...userDetails,userPassword: event.target.value});
  };
  const setUserType=(event) =>{
    setUserDetails({...userDetails,userType: event.target.value});
  };

  const signInUser = () => {
    if(userDetails.userEmail.length==0){
      setErrorMessage("Email address can't be empty");
    }
    if(userDetails.userPassword.length==0){
      setErrorMessage("Password can't be empty");
    }
    if(userDetails.userPassword.length==0 && userDetails.userEmail.length==0){
      setErrorMessage("Email address and Password can't be empty");
    }

    
    if(errorMessage=='No Error'){
      //write signin logic here
      console.log(userDetails);
    }
  };

  const signUpUser = () => {
    console.log(userDetails);
    if(userDetails.userName.length==0){
      setErrorMessage("Full Name can't be empty");
    }
    if(userDetails.userEmail.length==0){
      setErrorMessage("Email address can't be empty");
    }
    if(userDetails.userPassword.length==0){
      setErrorMessage("Password can't be empty");
    }
    if((userDetails.userName.length==0 && userDetails.userPassword.length==0)||
    (userDetails.userName.length==0 && userDetails.userEmail.length==0)||
    (userDetails.userPassword.length==0 && userDetails.userEmail.length==0)||
    (userDetails.userName.length==0 && userDetails.userPassword.length==0 && userDetails.userEmail.length==0)){
      setErrorMessage("Fileds can't be empty");
    }

    if(errorMessage=='No Error'){
        //write signup logic here
        console.log(userDetails);
    }
  };

  const forgotPassword=() =>{
    console.log("Forgot Password");
    if(userDetails.userEmail.length==0)
      setErrorMessage("Please enter your email address. We'll send you a link to reset your password");
    else
      setPasswordStatus('We have e-mailed your password reset link to '+userDetails.userEmail);
  };

  if (authMode === "signin") {
    return (
      <div>
        { (passwordStatus!='NA')?
          <Alert key='success' variant='success' className="Auth-form-content">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </svg>
            <span style={{marginLeft:"10px"}}>{passwordStatus}</span>
          </Alert>
          :
          <span/>
        }
        { (errorMessage!='No Error')?

          <Alert key='danger' variant='danger' className="Auth-form-content">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
              <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            {errorMessage}
          </Alert>
          :
          <span/>
        }
      <div className="Auth-form-container">
        <div className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="Pointer" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                value={userDetails.userEmail}
                className="form-control mt-1"
                placeholder="Enter email"
                onChange={handleEmailChange}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                value={userDetails.userPassword}
                className="form-control mt-1"
                placeholder="Enter password"
                onChange={handlePasswordChange}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button className="btn btn-primary" onClick={signInUser}>
                Submit
              </button>
            </div>
            <p className="text-center mt-2" style={{float:'right'}}>
              <span className="Pointer" onClick={forgotPassword}>
                Forgot password?
              </span>
            </p>
          </div>
        </div>
      </div>
      </div>
    )
  }

  return (
    <div>
        { (errorMessage!='No Error')?

          <Alert key='danger' variant='danger' className="Auth-form-content">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
              <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            {errorMessage}
          </Alert>
          :
          <span/>
        }
    <div className="Auth-form-container">
      <div className="Auth-form" id="signUpForm">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="Pointer" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="text"
              value={userDetails.userName}
              className="form-control mt-1"
              placeholder="Full Name"
              onChange={handleNameChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              value={userDetails.userEmail}
              className="form-control mt-1"
              placeholder="Email Address"
              onChange={handleEmailChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              value={userDetails.userPassword}
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              onChange={handlePasswordChange}
            />
          </div>
          <div className="form-group mt-3" onChange={setUserType}>
            <input type="radio" value="Admin" name="user" defaultChecked/> Admin
            <span  style={{paddingLeft:'15px'}}>
              <input type="radio" value="Employee" name="user"/> Employee
            </span>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button className="btn btn-primary" onClick={signUpUser}>
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}