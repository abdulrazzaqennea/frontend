import {ListGroup} from "reactstrap";
import React from 'react';
import {Link,useLocation} from "react-router-dom";
import './Admin.css';

const Common = () =>{
    const location = useLocation();
    const formValues=location.state;
    return(
        <ListGroup className="menu">
            <h1>Retailer/Distributor</h1>
            <br/><br/><br/>
            <Link
                className="list-group-item list-group-item-action"
                tag="a"
                to="/Common/AllStaff"
                action
            >
            All Staff
            </Link>
            <Link
                className="list-group-item list-group-item-action"
                tag="a"
                to="/Common/AllProducts"
                action
            >
            All Products
            </Link>
            <Link
                className="list-group-item list-group-item-action"
                tag="a"
                to="/Common/PersonalDetail"
                action
                state={{formValues}}
            >
            Personal Details
            </Link>
        </ListGroup>
    )
}

export default Common;