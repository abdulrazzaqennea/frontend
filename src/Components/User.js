import React from "react";
import {
    Card,
    CardBody,
    CardSubtitle,
    CardText,
    Button,
} from "reactstrap";
import { authuser,declineUser,declineAuthUser,declineBlockedUser,blockuser } from '../Services/login-service';

const User = ({user,auth,block,allUsers}) => {
    const AuthUser=(e)=>{
        e.preventDefault();
        authuser(user).then((Response)=>{
        })
        DeclineUser(e);
    }
    
    const DeclineUser = (e) =>{
        e.preventDefault();
        declineUser(user.id).then((Response)=>{
        })
    }

    const DeclineAuthUser = (e) =>{
        e.preventDefault();
        blockuser(user).then((Response)=>{
            console.log("Add to block list");
        })
        declineAuthUser(user.id).then((Response)=>{
            console.log("In deleted from the current page");
        })
    }

    const AcceptBlockedUser = (e) =>{
        e.preventDefault();
        authuser(user).then((Response)=>{
            console.log("Added to existing ");
        })
        declineBlockedUser(user.id).then((Response)=>{
            console.log("Blocked User Deleted");
        })
    }

    const BlockUser = (e) =>{
        e.preventDefault();
        blockuser(user).then((Response)=>{
            console.log("Add to block list");
        })
        DeclineUser(e);
    }

    return (
        <Card>
            <CardBody className="text-center">
                <CardSubtitle className="fw-bold">{`Business Name - ${user.business}`}</CardSubtitle>
                <CardText>{`Contact Person - ${user.contact}`}</CardText>
                <CardText>{`Phone Number - ${user.number}`}</CardText>
                <div style={{display:"flex",flexDirection:"row",justifyContent:"center",gap:"1.5rem"}}>
                {auth &&
                <>
                <Button color="danger" onClick={BlockUser}>Block</Button>
                <Button color="danger" onClick={AuthUser}>Approve</Button>
                <Button color="danger" onClick={DeclineUser}>Decline</Button>
                </>}
                {allUsers &&
                <Button color="danger" onClick={DeclineAuthUser}>Block</Button>
                }
                {block && 
                <Button color="danger" onClick={AcceptBlockedUser}>unblock & accept</Button>}
                </div>
            </CardBody>
        </Card>
    )
}
export default User;