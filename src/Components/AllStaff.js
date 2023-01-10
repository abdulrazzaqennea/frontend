import {useState, useEffect} from 'react';
import Staff from './Staff';
import {getStaff} from '../Services/login-service';

const AllStaff = ()=>{
    const[staff, setstaff]=useState([])
    useEffect(()=>{
        getAllStaffData();
    },[]);
    const getAllStaffData=()=>{
        getStaff().then((response)=>{
        setstaff(response);
        })
    }
    return(
        <div>
            <h1>All Staff </h1>
            {staff.length>0
            ? staff.map((item)=><Staff staff={item} key={item.id}/>)
            : "No Staff"}
        </div>
    )
}
export default AllStaff;