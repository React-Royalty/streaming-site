import { useState, useEffect, useRef  } from 'react';
import { useOutletContext, Link, useNavigate  } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import { FaRegUser, FaUser } from "react-icons/fa";
import { HiLockClosed, HiOutlineLockClosed, HiOutlineLockOpen, HiLockOpen } from "react-icons/hi";
import { BiErrorCircle } from 'react-icons/bi';


import { registerFetch, meFetch } from '../../api/users';
import { Typography } from '@mui/material';

const Register = () => {

  const { setLoggedIn, setUserData } = useOutletContext();

  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ confirmPassword, setConfirmPassword ] = useState("");
  const [ passwordsMatch, setPasswordsMatch] = useState(true);
  const [ rememberMe, setRememberMe ] = useState(true);

  const [ passwordVisibility, setPasswordVisibility ] = useState(false);

  const [ usernameFocus, setUsernameFocus ] = useState(false);
  const [ passwordFocus, setPasswordFocus ] = useState(false);

  const [ usernameError, setUsernameError ] = useState(false);
  const [ passwordError, setPasswordError ] = useState(false);
  const [ errorMessage, setErrorMessage ] = useState("");

  const [ inputContainerWidthRef, setInputContainerWidthRef ] = useState(0);
  const wRef = useRef(0);

  const navigate = useNavigate();

  useEffect(() => {
    setInputContainerWidthRef((wRef.current.clientWidth) + "px");
  }, []);

  useEffect(() => {
    checkPasswordsMatch();
  }, [password, confirmPassword])


  function checkPasswordsMatch() {
    if (confirmPassword !== password && confirmPassword !== "") {
      setPasswordsMatch(false);
      setErrorMessage("Confirmed password does not match password");
    } else {
      setPasswordsMatch(true);
      setErrorMessage("");
    }
  }


  async function registerFormSubmitHandler(event) {
    event.preventDefault();

    if (!passwordsMatch) {
      setErrorMessage("Confirmed password DOES NOT MATCH password");
      return;
  }

    const registerFetchData = await registerFetch(username, password);

    if (registerFetchData.success) {
        setLoggedIn(true);
        localStorage.setItem("token", registerFetchData.token);
        const userFetchData = await meFetch();
        setUserData(userFetchData.user);
        navigate("/profile");
    } else {
        setErrorMessage(registerFetchData.message);
        console.log("error,", registerFetchData);
        if ( registerFetchData.message !== errorMessage ) {
          setUsernameError(false);
          setPasswordError(false);
          if ( registerFetchData.name === "MissingUsernameError" ) {
            setUsernameError(true);
            console.log("username error")
          } else if ( registerFetchData.name === "MissingPasswordError" ) {
            setPasswordError(true);
            console.log("password error")
          }
        }

    }
  }

  return (
    <div className="center-column">
    <div className='login'>
      <h1>Register Account</h1>
      <form onSubmit={registerFormSubmitHandler}>

        <label htmlFor="username-input" className="labeled-input" ref={wRef}>
          <input type="text"  value={username} onChange={(event) => setUsername(event.target.value)} id="username-input" placeholder="&nbsp;"></input>
          <span className="labeled-input__label">Username</span>
          <span className="labeled-input__focus-bg"></span>
        </label>

        <label htmlFor="password-input" className="labeled-input">
          <input type={ !passwordVisibility ? 'password' : 'text'} value={password} onChange={(event) => setPassword(event.target.value)} id="password-input" placeholder="&nbsp;"></input>
          <span className="labeled-input__label">Password</span>
          <span className="labeled-input__focus-bg"></span>
          <span className="labeled-input__show-pw-btn" onClick={() => setPasswordVisibility(!passwordVisibility)}>{ passwordVisibility ? "HIDE" : "SHOW" }</span>
        </label>

        <label htmlFor="confirm-password-input" className="labeled-input">
          <input type={ !passwordVisibility ? 'password' : 'text'} value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} id="confirm-password-input" placeholder="&nbsp;"></input>
          <span className="labeled-input__label">Confirm Password</span>
          <span className={ passwordsMatch ? "labeled-input__focus-bg" : "labeled-input__focus-bg__error" }></span>
          <span className="labeled-input__show-pw-btn" onClick={() => setPasswordVisibility(!passwordVisibility)}>{ passwordVisibility ? "HIDE" : "SHOW" }</span>
        </label>

        {
          errorMessage ? <p className='error-msg' style={{maxWidth: inputContainerWidthRef}}>{errorMessage}</p> : null
        }

        <div>
          <button type="submit">Sign Up</button>
          <div className='separated-row'>
            <FormGroup>
              <FormControlLabel control={<Checkbox defaultChecked style={{ color: "rgba(255, 255, 255, 0.5" }} />} label={<Typography style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "10pt" }} >Remember me</Typography>} onClick={() => setRememberMe(!rememberMe)}/>
            </FormGroup>
            <Link className='login__need-help-link'>Need help?</Link>
          </div>
        </div>

        <div className='login__sign-up-link'>Already have an account? <Link to="/profile">Sign in now.</Link></div>

      </form>
    </div>
  </div>
  )
}

export default Register