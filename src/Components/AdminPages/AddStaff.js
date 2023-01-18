import { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import "../CommonStyles/CommonPages.css";
import { addStaff } from "../../Services/login-service";
import { useNavigate } from "react-router-dom";

const AddStaff = () => {
  const initialValues = { position: "", name: "", number: "", email: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
      navigate(`/`);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    if (Object.keys(formErrors).length === 0) {
      addStaff(formValues).then((response) => {
        setFormValues({
          position: "",
          name: "",
          number: "",
          email: "",
        });
      });
    }
  };

  const validate = (values) => {
    const errors = {};
    function isValidEmail(email) {
      return /\S+@\S+\.\S+/.test(email);
    }
    if (values.position.length === 0) {
      errors.position = "Enter the position";
    }
    if (values.name.length === 0) {
      errors.name = "Enter the Name of the Employee";
    }
    if (values.number.length !== 10) {
      errors.number = "Enter a valid Phone Number";
    }
    if (!isValidEmail(values.email)) {
      errors.email = "Enter a valid email address!";
    }
    return errors;
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Staff</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Position</label>
            <input
              type="text"
              name="position"
              placeholder="Position"
              value={formValues.position}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.position}</p>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formValues.name}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.name}</p>
          <div className="field">
            <label>Phone Number</label>
            <input
              type="number"
              name="number"
              placeholder="Phone Number"
              value={formValues.number}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.number}</p>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email Id"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddStaff;
