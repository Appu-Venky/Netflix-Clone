import React, { useState } from 'react';
import { ClipLoader } from "react-spinners";
import { toast } from 'react-toastify';
import logo from '../../assets/netflix-logo.svg';
import { login, signup } from '../../firebase';
import './Login.css';


const Login = () => {
  const [signState, setSignState] = useState("Sign In");

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [remember, setremember] = useState(false);
  const [loading, setloading] = useState(false);


  const user_auth = async (event) => {
    event.preventDefault();
    setloading(true);

    if (remember === true) {  
      try {
        if (signState === "Sign In") {
          await login(email, password);
        } else {
          await signup(name, email, password);
        }
      } catch (error) {
        console.error(error);
        toast.error(error.message);
      }
    } else {
      toast.error("'Remember Me' before proceeding.");
    }

    setloading(false);
  };




  return (
    <div className="login">
      <img src={logo} alt="Netflix Logo" className="login-logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" && <input type="text" placeholder="Your Name" value={name} onChange={(e) => setname(e.target.value)} />}
          <input type="email" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)} />
          <button onClick={user_auth} type="submit" disabled={loading}>
            {loading ? <ClipLoader size={20} color="#fff" /> : signState}
          </button>

          <div className="form-help">
            <div className="remember">
              <input
                type="checkbox"
                id="remember"
                checked={remember}
                onChange={(e) => setremember(e.target.checked)}
              />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>

        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>New to Netflix? <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span></p>
          ) : (
            <p>Already have an account? <span onClick={() => setSignState("Sign In")}>Sign In</span></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
