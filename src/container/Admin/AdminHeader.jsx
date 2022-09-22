import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const AdminHeader = () => {
  const [active, setActive] = useState("adminhome");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
      setActive("login");
      navigate("/auth");
    });
  };
  
  const userId = user?.uid;
  console.log(user?.displayName);
  console.log(userId);
  return (
    <nav className="admin__home--nav">
      <ul className="admin--ul">
        <Link to='/admin/home'>
            <li className="admin__nav-item">Home</li>        
        </Link>
        <Link to="/create">
          <li
            className={`admin__nav-item admin__nav-link ${
              active === "create" ? "active" : ""
            }`}
            onClick={() => setActive("create")}
          >
            Create New Insight
          </li>
        </Link>
        <Link to="/create-events">
          <li
            className={`admin__nav-item admin__nav-link ${
              active === "create" ? "active" : ""
            }`}
            onClick={() => setActive("create")}
          >
            Create New Event
          </li>
        </Link>
        {userId ? (
          <div className="admin__profile--flex">
            <p className="admin__nav-item"><AiOutlineUser />{user?.displayName}</p>
            <li className="admin__logout admin__nav-item" onClick={handleLogout}>
              Logout
            </li>
          </div>
        ) : null}
      </ul>
    </nav>
  );
};

export default AdminHeader;
