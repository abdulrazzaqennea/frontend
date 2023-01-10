import { useState, useEffect } from "react";
import 'semantic-ui-css/semantic.min.css';
import "./Login.css";
import { useNavigate } from 'react-router-dom';

const Login=()=> {
  const navigate = useNavigate();
  const initialValues = { business: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // console.log(formValues);
      userLoggedIn(formValues);
    }
  }, [formErrors]);

  const userLoggedIn=(formValues)=>{
    if(formValues.business==="Admin"){
      navigate(`/Admin`);
    } else {
      navigate(`/Common`,{state:formValues});
    } 
  }
  const validate = (values) => {
    const errors = {};
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6 || values.password.length > 12) {
      errors.password = "Please enter a valid password";
    }
    return errors;
  };

  return (
    <div className="container">

      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Business</label>
            <input
              type="text"
              name="business"
              placeholder="Business"
              value={formValues.business}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <button class="ui button blue" >submit</button>
          <button class="ui button blue" onClick={() => {navigate(`/Register`)}}>Register</button>
        </div>
      </form>
    </div>
  );
}

export default Login;