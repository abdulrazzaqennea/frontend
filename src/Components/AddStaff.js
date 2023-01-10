import { useState } from "react";
import 'semantic-ui-css/semantic.min.css';
import "./Register.css";
import { staff } from '../Services/login-service';

const AddStaff=()=> {
  const initialValues = { position: "", name: "", number: "", email:"" };
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    staff(formValues).then((response)=>{
      console.log(response);
      console.log("Success log");
      setFormValues({
        position:"",
        name:"",
        number:"",
        email:""
      })
    })
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
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddStaff;