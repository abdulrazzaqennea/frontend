import { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { registerUser } from "../Services/login-service";
import "./CommonStyles/CommonPages.css";

const Register = () => {
  const initialValues = {
    business: "",
    contact: "",
    license: "",
    gst: "",
    number: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    if (Object.keys(formErrors).length === 0) {
      registerUser(formValues).then((response) => {
        setFormValues({
          business: "",
          contact: "",
          license: "",
          gst: "",
          number: "",
          password: "",
        });
      });
    }
  };

  const validate = (values) => {
    const errors = {};
    if (values.business.length === 0) {
      errors.business = "Business Name is required!";
    }
    if (values.contact.length === 0) {
      errors.contact = "Contact Name is required!";
    }
    if (values.gst.length != 15) {
      errors.gst = "Enter a valid GST number!";
    }
    if (values.number.length !== 10) {
      errors.number = "Enter a valid Phone number!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be more than 6 characters";
    } else if (values.password.length > 12) {
      errors.password = "Password cannot exceed more than 12 characters";
    }
    return errors;
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
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
          <p>{formErrors.business}</p>
          <div className="field">
            <label>Contact Person</label>
            <input
              type="text"
              name="contact"
              placeholder="Contact Person"
              value={formValues.contact}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.contact}</p>
          <div className="field">
            <label>License</label>
            <input
              type="text"
              name="license"
              placeholder="License"
              value={formValues.license}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label>GST</label>
            <input
              type="text"
              name="gst"
              placeholder="GST Number"
              value={formValues.gst}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.gst}</p>
          <div className="field">
            <label>Number</label>
            <input
              type="number"
              name="number"
              placeholder="Number"
              value={formValues.number}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.number}</p>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Strong Password"
              value={formValues.password}
              onChange={handleChange}
            />
            <p>{formErrors.password}</p>
          </div>
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
