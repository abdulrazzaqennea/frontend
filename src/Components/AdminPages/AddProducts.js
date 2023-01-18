import { useEffect, useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { Button } from "reactstrap";
import "../CommonStyles/CommonPages.css";
import { addProduct } from "../../Services/login-service";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const initialProduct = { name: "", quantity: "", price: "" };
  const [singleProduct, setsingleProduct] = useState(initialProduct);
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
      navigate(`/`);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setsingleProduct({ ...singleProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(singleProduct));
    if (Object.keys(formErrors).length === 0) {
      addProduct(singleProduct).then((response) => {
        setsingleProduct({
          name: "",
          quantity: "",
          price: "",
        });
      });
    }
  };

  const validate = (values) => {
    const errors = {};
    if (values.name.length === 0) {
      errors.name = "Enter the Product Name!";
    }
    if (values.quantity == 0) {
      errors.quantity = "Quantity should be greater than 0";
    }
    if (values.price == 0) {
      errors.price = "Price should be greater than 0";
    }
    return errors;
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Add Products</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Product Name</label>
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={singleProduct.name}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.name}</p>
          <div className="field">
            <label>Quantity</label>
            <input
              type="number"
              name="quantity"
              placeholder="Quantity Available"
              value={singleProduct.quantity}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.quantity}</p>
          <div className="field">
            <label>Price</label>
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={singleProduct.price}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.price}</p>
          <br />
          <Button className="fluid ui button blue" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
