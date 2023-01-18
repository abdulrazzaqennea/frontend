import React from "react";
import { Card, CardBody, CardSubtitle, CardText, Button } from "reactstrap";
import {
  authenticateUser,
  deleteNewUser,
  blockuser,
} from "../../Services/login-service";

const User = ({ user, auth, block, allUsers }) => {
  const deleteUser = (e) => {
    e.preventDefault();
    deleteNewUser(user.id).then((Response) => {});
  };

  const declinedAuthUser = (e) => {
    e.preventDefault();
    blockuser(user.id).then((Response) => {});
  };

  const acceptBlockedUser = (e) => {
    e.preventDefault();
    authenticateUser(user.id).then((Response) => {});
  };

  return (
    <Card>
      <CardBody className="text-center">
        <CardSubtitle className="fw-bold">{`Business Name - ${user.business}`}</CardSubtitle>
        <CardText>{`Contact Person - ${user.contact}`}</CardText>
        <CardText>{`Phone Number - ${user.number}`}</CardText>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "1.5rem",
          }}
        >
          {allUsers && (
            <>
              <Button color="danger" onClick={declinedAuthUser}>
                Block
              </Button>
              <Button color="danger" onClick={acceptBlockedUser}>
                Approve
              </Button>
              <Button color="danger" onClick={deleteUser}>
                Decline
              </Button>
            </>
          )}
          {auth && (
            <Button color="danger" onClick={declinedAuthUser}>
              Block
            </Button>
          )}
          {block && (
            <Button color="danger" onClick={acceptBlockedUser}>
              unblock & accept
            </Button>
          )}
        </div>
      </CardBody>
    </Card>
  );
};
export default User;
