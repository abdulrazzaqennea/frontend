import { myAxios } from "./axios";

//post calls 
export const register=(newuser)=>{
    return myAxios.post('/user',newuser).then((response)=>response.data);
}

export const authuser=(authuser)=>{
    return myAxios.post('/authuser',authuser).then((response)=>response.data);
}

export const blockuser=(blockuser)=>{
    return myAxios.post('/blockuser',blockuser).then((response)=>response.data);
}

export const staff=(newstaff)=>{
    return myAxios.post('/staff',newstaff).then((response)=>response.data);
}

export const product=(newproduct)=>{
    return myAxios.post('/product',newproduct).then((response)=>response.data);
}


//get calls
export const getStaff=()=>{
    return myAxios.get('/staff').then((response)=>response.data);
}

export const getUsers=()=>{
    return myAxios.get('/authuser').then((response)=>response.data);
}

export const getAuthUsers=()=>{
    return myAxios.get('/user').then((response)=>response.data);
}

export const getBlockUsers=()=>{
    return myAxios.get('/blockuser').then((response)=>response.data);
}

export const getProducts=()=>{
    return myAxios.get('/products').then((response)=>response.data);
}

export const getUserDetails=(business,password)=>{
    return myAxios.get(`/authuser/${business}/${password}`).then((response)=>response.data);
}

//delete calls
export const declineUser=(id)=>{
    return myAxios.delete(`/user/${id}`).then((response)=>response.data);
}

export const declineAuthUser=(id)=>{
    return myAxios.delete(`/authuser/${id}`).then((response)=>response.data);
}

export const declineBlockedUser=(id)=>{
    return myAxios.delete(`/blockuser/${id}`).then((response)=>response.data);
}

//update calls
export const updateUser=(updateAuthUser)=>{
    return myAxios.put('/authuser',updateAuthUser).then((response)=>response.data);
}