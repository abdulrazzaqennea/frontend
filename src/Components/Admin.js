import {ListGroup} from "reactstrap";
import React from 'react';
import {Link} from "react-router-dom";
import './Admin.css';

const Admin = () =>{
    return(
        <ListGroup className="menu">
            <h1>Admin Panel</h1>
            <br/><br/><br/>
            <Link
                className="list-group-item list-group-item-action"
                tag="a"
                to="/Admin/AllUsers"
                action
                state={{all:true,auths:false,blocked:false}}
            >
            Existing Users
            </Link>
            <Link
                className="list-group-item list-group-item-action"
                tag="a"
                to="/Admin/AllUsers"
                action
                state={{all:false,auths:true,blocked:false}}
            >
            To Be Authenticated
            </Link>
            <Link
                className="list-group-item list-group-item-action"
                tag="a"
                to="/Admin/AllUsers"
                action
                state={{all:false,auths:false,blocked:true}}
            >
            Blocked List
            </Link>
            <Link
                className="list-group-item list-group-item-action"
                tag="a"
                to="/Admin/AddProducts"
                action
            >
            Add Products
            </Link>
            <Link
                className="list-group-item list-group-item-action"
                tag="a"
                to="/Admin/AddStaff"
                action
            >
            Upload Staff
            </Link>
        </ListGroup>
    )
}

export default Admin;