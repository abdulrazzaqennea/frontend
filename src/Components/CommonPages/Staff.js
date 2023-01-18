import React from "react";
import { Card, CardBody, CardSubtitle, CardText } from "reactstrap";

const User = ({ staff }) => {
  return (
    <Card>
      <CardBody className="text-center">
        <CardSubtitle className="fw-bold">{`Designation - ${staff.position}`}</CardSubtitle>
        <CardText>{`Full Name - ${staff.name}`}</CardText>
        <CardText>{`Phone Number - ${staff.phone}`}</CardText>
        <CardText>{`Email id - ${staff.email}`}</CardText>
      </CardBody>
    </Card>
  );
};
export default User;
