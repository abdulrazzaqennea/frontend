import { ListGroup } from "reactstrap";
import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../CommonStyles/CommonMenu.css";

const Common = () => {
  const location = useLocation();
  const formValues = location.state;
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
      navigate(`/`);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    navigate(`/`);
  };

  return (
    <ListGroup className="menu">
      <h1>Retailer/Distributor</h1>
      <br />
      <br />
      <br />
      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="/AllStaff"
        action
      >
        All Staff
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="/AllProducts"
        action
      >
        All Products
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="/PersonalDetail"
        action
        state={{ formValues }}
      >
        Personal Details
      </Link>
      <br />
      <br />
      <button class="ui button blue" onClick={logoutHandler}>
        Logout
      </button>
    </ListGroup>
  );
};

export default Common;
