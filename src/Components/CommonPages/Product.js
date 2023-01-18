import React from "react";
import { Card, CardBody, CardSubtitle, CardText } from "reactstrap";

const User = ({ product }) => {
  return (
    <Card>
      <CardBody className="text-center">
        <CardSubtitle className="fw-bold">{`Product Name - ${product.name}`}</CardSubtitle>
        <CardText>{`Product Quantity - ${product.quantity}`}</CardText>
        <CardText>{`Product Price - ${product.price}`}</CardText>
      </CardBody>
    </Card>
  );
};
export default User;
