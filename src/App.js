import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./container/Home/Home";
import Insights from "./container/Insights/Insights";
import Services from "./container/Services/Services";
import Industries from "./container/Industries/Industries";
import About from "./container/About/About";
import Error404 from "./container/Error404/Error404";
import Auditing from "./container/ServicesDetails/Auditing";
import Tax from "./container/ServicesDetails/Tax";
import Consulting from "./container/ServicesDetails/Consulting";
import Cfo from "./container/ServicesDetails/CFO";
import Scrolltotop from "./component/Scroll-to-top/index";
import Success from "./component/Success/Success";
import BlogDetails from "./container/BlogDetails/BlogDetails";
import AddEditBlog from "./container/Admin/AddEditBlog";
import AdminHome from "./container/Admin/AdminHome";
import { auth } from "./firebase";
import Auth from "./container/Admin/Auth";
import Career from "./container/Career/Career";
import WhtApp from "./container/WhtApp/WhtApp";
// import { signOut } from "firebase/auth";
function App() {
  const [user, setUser] = useState(null);
  const [active, setActive] = useState();
  // const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  // const handleLogout = () => {
  //   signOut(auth).then(() => {
  //     setUser(null);
  //     setActive("login");
  //     navigate("/auth");
  //   });
  // };
  return (
    <div className="App">
      <Router>
        <Scrolltotop />
        <ToastContainer position="top-center" />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/insights" element={<Insights />} />
          <Route exact path="/insights/:id" element={<BlogDetails />} />
          <Route exact path="/auth" element={<Auth />} />
          <Route path="/admin/home" element={<AdminHome user={user} />} />
          <Route
            path="/create"
            element={
              user?.uid ? <AddEditBlog user={user} /> : <Navigate to="/auth" />
            }
          />
          <Route
            path="/update/:id"
            element={
              user?.uid ? (
                <AddEditBlog user={user} setActive={setActive} />
              ) : (
                <Navigate to="/auth" />
              )
            }
          />

          <Route exact path="/services" element={<Services />} />
          <Route exact path="/career" element={<Career/>}/>
          <Route exact path="/whtapp" element={<WhtApp/>}/>
          <Route exact path="/audit" element={<Auditing />} />
          <Route exact path="/tax" element={<Tax />} />
          <Route exact path="/consulting" element={<Consulting />} />
          <Route exact path="/cfo" element={<Cfo />} />
          <Route exact path="/industries" element={<Industries />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/success" element={<Success />} />
          <Route exact path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
