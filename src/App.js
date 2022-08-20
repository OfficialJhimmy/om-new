import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./container/Home/Home";
import Insights from "./container/Insights/Insights";
import Services from "./container/Services/Services";
import Industries from "./container/Industries/Industries";
import About from "./container/About/About";
import Error404 from "./container/Error404/Error404";
import BlogDetails from "./container/BlogDetails/BlogDetails";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/insights" element={<Insights />} />
          <Route exact path="/insights/:id" element={<BlogDetails />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/industries" element={<Industries />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
