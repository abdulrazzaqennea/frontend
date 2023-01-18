import { useEffect, useState } from "react";
import Product from "./Product";
import { getProducts } from "../../Services/login-service";
import CommonSpinner from "../CommonStyles/CommonSpinner";
import { useNavigate } from "react-router-dom";

const AllProduct = () => {
  const [products, setproducts] = useState([]);
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
      navigate(`/`);
    } else {
      getAllProducts();
    }
  }, []);

  const getAllProducts = () => {
    setLoadingSpinner(true);
    getProducts().then((response) => {
      setproducts(response);
      setLoadingSpinner(false);
    });
  };

  return (
    <div>
      <h1>All Products </h1>
      {loadingSpinner && <CommonSpinner />}
      {products.length > 0 &&
        products.map((item) => <Product product={item} />)}
      {!loadingSpinner && products.length === 0 && (
        <h2 className="text-center text-info m-5">No Products Found</h2>
      )}
    </div>
  );
};
export default AllProduct;
