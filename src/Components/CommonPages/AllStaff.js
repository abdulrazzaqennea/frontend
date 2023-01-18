import { useState, useEffect } from "react";
import Staff from "./Staff";
import { getStaff } from "../../Services/login-service";
import CommonSpinner from "../CommonStyles/CommonSpinner";
import { useNavigate } from "react-router-dom";

const AllStaff = () => {
  const [staff, setstaff] = useState([]);
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
      navigate(`/`);
    } else {
      getAllStaffData();
    }
  }, []);
  const getAllStaffData = () => {
    setLoadingSpinner(true);
    getStaff().then((response) => {
      setstaff(response);
      setLoadingSpinner(false);
    });
  };
  return (
    <div>
      <h1>All Staff </h1>
      {loadingSpinner && <CommonSpinner />}
      {staff.length > 0 &&
        staff.map((item) => <Staff staff={item} key={item.id} />)}
      {!loadingSpinner && staff.length === 0 && (
        <h2 className="text-center text-info m-5">No Products Found</h2>
      )}
    </div>
  );
};
export default AllStaff;
