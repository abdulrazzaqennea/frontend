import {useState,useEffect} from 'react';
import User from './User';
import {useLocation} from 'react-router-dom';
import { getUsers,getAuthUsers,getBlockUsers } from '../Services/login-service';

const AllUsers = ()=>{
    const location = useLocation();
    const {all,auths,blocked} = location.state;
    const [auth,setauth]=useState(false);
    const [block,setblock]=useState(false);
    const [allUsers,setAllUsers]=useState(false);
    const[users, setusers]=useState([]);

    useEffect(()=>{
        setAllUsers(all);
        setauth(auths);
        setblock(blocked);
        getAllUsers();
    },[users]);
    
    const getAllUsers=()=>{
        if(auths){
            getAuthUsers().then((response)=>{
            setusers(response);
            })}
            else if(all){
            getUsers().then((response)=>{
            setusers(response);
            })}
            else if(blocked){
            getBlockUsers().then((response)=>{
            setusers(response);
            })
            }
    }


    return(
        <div>
            {block && <h1>Block Users List</h1>}
            {auths && <h1>To Be Authenticated</h1>}
            {allUsers && <h1>Existing Users </h1>}
            {users.length>0
            ? users.map((item)=><User user={item} auth={auth} block={block} allUsers={allUsers} key={item.id}/>)
            : "No Users"}
        </div>
    )
}
export default AllUsers;