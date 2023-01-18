import { ListGroup } from "reactstrap";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../CommonStyles/CommonMenu.css";
import { useNavigate } from "react-router-dom";

const Admin = () => {
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
      <h1>Admin</h1>
      <br />
      <br />
      <br />
      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="/NewUsers"
        action
        state={{ all: false, auths: true, blocked: false }}
      >
        Existing Users
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="/NewUsers"
        action
        state={{ all: true, auths: false, blocked: false }}
      >
        To Be Authenticated
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="/NewUsers"
        action
        state={{ all: false, auths: false, blocked: true }}
      >
        Blocked List
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="/AddProducts"
        action
      >
        Add Products
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
        to="/AddStaff"
        action
      >
        Upload Staff
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="/AllStaff"
        action
      >
        All Staff
      </Link>
      <br />
      <br />
      <button class="ui button blue" onClick={logoutHandler}>
        Logout
      </button>
    </ListGroup>
  );
};

export default Admin;
