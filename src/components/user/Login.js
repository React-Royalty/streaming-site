import { useState, useEffect, useRef } from "react";
import { useOutletContext, Link } from "react-router-dom";
import { BiErrorCircle } from "react-icons/bi";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Typography } from "@mui/material";

import { loginFetch, meFetch } from "../../api/users";

const Login = () => {

  const { setLoggedIn, setUserData } = useOutletContext();

  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ rememberMe, setRememberMe ] = useState(true);

  const [ passwordVisibility, setPasswordVisibility ] = useState(false);

  const [ usernameError, setUsernameError ] = useState(false);
  const [ passwordError, setPasswordError ] = useState(false);
  const [ errorMessage, setErrorMessage ] = useState("");

  const [ inputContainerWidthRef, setInputContainerWidthRef ] = useState(0);
  const wRef = useRef(0);


  useEffect(() => {
    setInputContainerWidthRef((wRef.current.clientWidth) + "px");
  }, []);


  async function loginFormSubmitHandler(event) {
    event.preventDefault();

    const loginFetchData = await loginFetch(username, password);

    if (loginFetchData.success) {
      setLoggedIn(true);
      localStorage.setItem("token", loginFetchData.token);
      const userFetchData = await meFetch();
      setUserData(userFetchData.user);
    } else {
      if ( loginFetchData.message !== errorMessage ) {
        setErrorMessage(loginFetchData.message);
        setUsernameError(false);
        setPasswordError(false);
        if ( loginFetchData.name === "LoginMissingUsernameError" ) {
          setUsernameError(true);
        } else if ( loginFetchData.name === "LoginMissingPasswordError" ) {
          setPasswordError(true);
        }
      }
    }
  }


  return (
    <div className="center-column">
      <div className="login">
        <h1>Sign In</h1>
        <form onSubmit={loginFormSubmitHandler}>

          <label htmlFor="username-input" className={ usernameError ? "labeled-input error" : "labeled-input"} ref={wRef} >
            <input type="text"  value={username} onChange={(event) => setUsername(event.target.value)} id="username-input" placeholder="&nbsp;"></input>
            <span className="labeled-input__label">Username</span>
            <span className="labeled-input__focus-bg"></span>
          </label>

          <label htmlFor="password-input" className={ passwordError ? "labeled-input error" : "labeled-input"} >
            <input type={ !passwordVisibility ? "password" : "text"} value={password} onChange={(event) => setPassword(event.target.value)} id="password-input" placeholder="&nbsp;"></input>
            <span className="labeled-input__label">Password</span>
            <span className="labeled-input__focus-bg"></span>
            <span className="labeled-input__show-pw-btn" onClick={() => setPasswordVisibility(!passwordVisibility)}>{ passwordVisibility ? "HIDE" : "SHOW" }</span>
          </label>

          {
            errorMessage ? <p className="error-msg" style={{maxWidth: inputContainerWidthRef}}><BiErrorCircle className="error-msg__icon" />{errorMessage}</p> : null
          }

          <div>
            <button type="submit">Sign In</button>
            <div className="separated-row">
              <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked style={{ color: "rgba(255, 255, 255, 0.5" }} />} label={<Typography style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "10pt" }} >Remember me</Typography>} onClick={() => setRememberMe(!rememberMe)}/>
              </FormGroup>
              <Link className="login__need-help-link">Need help?</Link>
            </div>
          </div>

          <div className="login__sign-up-link">New to marathon? <Link to="/register">Sign up now.</Link></div>

        </form>
      </div>
    </div>

  );
}

export default Login;