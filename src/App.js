import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import Staff from './Components/AddStaff';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Admin from './Components/Admin';
import AllUsers from './Components/AllUsers';
import AllProducts from './Components/AllProducts';
import AddProducts from './Components/AddProducts';
import AllStaff from './Components/AllStaff';
import Common from './Components/Common';
import PersonalDetail from './Components/PersonalDetail';

function App() {
  return (
    <div className="App">
    <h1>Pharmaceutical Managment</h1>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/Admin" element={<Admin/>}/>
      <Route path="/Admin/AllUsers" element={<AllUsers/>}/>
      <Route path="/Admin/AddProducts" element={<AddProducts/>}/>
      <Route path="/Admin/AddStaff" element={<Staff/>}/>
      <Route path="/Common" element={<Common/>}/>
      <Route path="/Common/AllStaff" element={<AllStaff/>}/>
      <Route path="/Common/AllProducts" element={<AllProducts/>}/>
      <Route path="/Common/PersonalDetail" element={<PersonalDetail/>}/>
      {/* <Route path="/Common/EditPersonal" element={<EditPersonal/>}/> */}
      </Routes>
    </BrowserRouter>
    </div>

  );
}

export default App;
