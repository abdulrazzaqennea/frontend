import { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import { Navigate, useLocation } from "react-router-dom";
import { getUserDetails, updateUser } from "../../Services/login-service";
import "../CommonStyles/CommonPages.css";

const CommonUserDetails = () => {
  const location = useLocation();
  const userValues = location.state;
  console.log(userValues); //getting login credentials here need to use this instead of hardcoded values after authentication works
  const initialValues = {
    business: "",
    contact: "",
    license: "",
    gst: "",
    number: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [isEdit, setIsEdit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEdit(true);
  };

  const updateDetails = (e) => {
    updateUser(formValues).then((Reponse) => {});
    setIsEdit(false);
  };
  const getSingleUserDetails = () => {
    getUserDetails(formValues.business, formValues.password).then(
      (Response) => {
        setFormValues(Response);
      }
    );
  };

  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
      Navigate(`/`);
    } else {
      setTimeout(() => {
        getSingleUserDetails();
      }, 1000);
    }
  }, [isEdit]);

  return (
    <div className="container">
      <form>
        <h1>Personal Details</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>{`Business - ${formValues.business}`}</label>
            {isEdit && (
              <input
                type="text"
                name="business"
                placeholder="Business"
                value={formValues.business}
                onChange={handleChange}
              />
            )}
          </div>
          <div className="field">
            <label>{`Contact Person - ${formValues.contact}`}</label>
            {isEdit && (
              <input
                type="text"
                name="contact"
                placeholder="Contact Person"
                value={formValues.contact}
                onChange={handleChange}
              />
            )}
          </div>
          <div className="field">
            <label>{`License - ${formValues.license}`}</label>
            {isEdit && (
              <input
                type="text"
                name="license"
                placeholder="License"
                value={formValues.license}
                onChange={handleChange}
              />
            )}
          </div>
          <div className="field">
            <label>{`GST - ${formValues.gst}`}</label>
            {isEdit && (
              <input
                type="text"
                name="gst"
                placeholder="GST Number"
                value={formValues.gst}
                onChange={handleChange}
              />
            )}
          </div>
          <div className="field">
            <label>{`Number - ${formValues.number}`}</label>
            {isEdit && (
              <input
                type="number"
                name="number"
                placeholder="Number"
                value={formValues.number}
                onChange={handleChange}
              />
            )}
          </div>
          <div className="field">
            <label>{`Password - ${formValues.password}`}</label>
            {isEdit && (
              <input
                type="password"
                name="password"
                placeholder="Enter Strong Password"
                value={formValues.password}
                onChange={handleChange}
              />
            )}
          </div>
          {isEdit && (
            <button className="fluid ui button blue" onClick={updateDetails}>
              Update
            </button>
          )}
          {!isEdit && (
            <button className="fluid ui button blue" onClick={handleSubmit}>
              Edit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CommonUserDetails;
