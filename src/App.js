import "./App.css";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Staff from "./Components/AdminPages/AddStaff";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./Components/AdminPages/Admin";
import AllUsers from "./Components/AdminPages/NewUsers";
import AllProducts from "./Components/CommonPages/AllProducts";
import AddProducts from "./Components/AdminPages/AddProducts";
import AllStaff from "./Components/CommonPages/AllStaff";
import Common from "./Components/CommonUserPages/CommonUser";
import PersonalDetail from "./Components/CommonUserPages/CommonUserDetails";
import CommonUserDetails from "./Components/CommonUserPages/CommonUserDetails";

function App() {
  return (
    <div className="App">
      <h1>Pharmaceutical Managment</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/NewUsers" element={<AllUsers />} />
          <Route path="/AddProducts" element={<AddProducts />} />
          <Route path="/AddStaff" element={<Staff />} />
          <Route path="/Common" element={<Common />} />
          <Route path="/AllStaff" element={<AllStaff />} />
          <Route path="/AllProducts" element={<AllProducts />} />
          <Route path="/PersonalDetail" element={<CommonUserDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
