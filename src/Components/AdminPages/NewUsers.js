import { useState, useEffect } from "react";
import User from "../CommonPages/User";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getNewUsers,
  getAuthUsers,
  getBlockUsers,
} from "../../Services/login-service";
import CommonSpinner from "../CommonStyles/CommonSpinner";

const AllUsers = () => {
  const location = useLocation();
  const { all, auths, blocked } = location.state;
  const [auth, setauth] = useState(false);
  const [block, setblock] = useState(false);
  const [allUsers, setAllUsers] = useState(false);
  const [users, setusers] = useState([]);
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
      navigate(`/`);
    } else {
      setAllUsers(all);
      setauth(auths);
      setblock(blocked);
      getAllUsers();
    }
  }, []);

  const getAllUsers = () => {
    if (auths) {
      setLoadingSpinner(true);
      getAuthUsers().then((response) => {
        setusers(response);
        setLoadingSpinner(false);
      });
    } else if (all) {
      setLoadingSpinner(true);
      getNewUsers().then((response) => {
        setusers(response);
        setLoadingSpinner(false);
      });
    } else if (blocked) {
      setLoadingSpinner(true);
      getBlockUsers().then((response) => {
        setusers(response);
        setLoadingSpinner(false);
      });
    }
  };

  return (
    <div>
      {block && <h1>Block Users List</h1>}
      {allUsers && <h1>To Be Authenticated</h1>}
      {auth && <h1>Existing Users </h1>}
      {loadingSpinner && <CommonSpinner />}
      {users.length > 0 &&
        users.map((item) => (
          <User
            user={item}
            auth={auth}
            block={block}
            allUsers={allUsers}
            key={item.id}
          />
        ))}
      {!loadingSpinner && users.length === 0 && (
        <h2 className="text-center text-info m-5">No Users Found</h2>
      )}
    </div>
  );
};
export default AllUsers;
