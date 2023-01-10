import { useState } from "react";
import 'semantic-ui-css/semantic.min.css';
import { Button } from "reactstrap";
import "./Register.css";
import { product } from "../Services/login-service";

const Staff=()=> {
  const initialProduct = { name: "", quantity: "", price: "" };
  const [singleProduct, setsingleProduct] = useState(initialProduct);
  // const [allProducts, setallProducts] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setsingleProduct({ ...singleProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(singleProduct);
    product(singleProduct).then((response)=>{
      console.log(response);
      console.log("Success log");
      setsingleProduct({
        name:"",
        quantity:"",
        price:""
      })      
    })
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
          {/* <Button className="fluid ui button blue" type="reset">Add More</Button> */}
          <br/>
          <Button className="fluid ui button blue" type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}

export default Staff;