import { myAxios } from "./axios";

//post calls
export const registerUser = (newuser) => {
  return myAxios.post("/adduser", newuser).then((response) => response.data);
};

export const authenticateUser = (id) => {
  return myAxios.put(`authenticateuser/${id}`).then((response) => response.data);
};

export const blockuser = (id) => {
  return myAxios
    .put(`/blockuser/${id}`)
    .then((response) => response.data);
};

export const addStaff = (newstaff) => {
  return myAxios.post("/addstaff", newstaff).then((response) => response.data);
};

export const addProduct = (newproduct) => {
  return myAxios.post("/addproduct", newproduct).then((response) => response.data);
};

//get calls
export const getStaff = () => {
  return myAxios.get("/getstaff").then((response) => response.data);
};

export const getNewUsers = () => {
  return myAxios.get("/newusers").then((response) => response.data);
};

export const getAuthUsers = () => {
  return myAxios.get("/authusers").then((response) => response.data);
};

export const getBlockUsers = () => {
  return myAxios.get("/blockedusers").then((response) => response.data);
};

export const getProducts = () => {
  return myAxios.get("/getproducts").then((response) => response.data);
};

export const getUserDetails = (business, password) => {
  return myAxios
    .get(`/authuser/${business}/${password}`)
    .then((response) => response.data);
};

//delete calls
export const deleteNewUser = (id) => {
  return myAxios.delete(`/newuser/${id}`).then((response) => response.data);
};

//update calls
export const updateUser = (updateAuthUser) => {
  return myAxios
    .put("/authuser", updateAuthUser)
    .then((response) => response.data);
};
