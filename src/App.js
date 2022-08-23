import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./container/Home/Home";
import Insights from "./container/Insights/Insights";
import Services from "./container/Services/Services";
import Industries from "./container/Industries/Industries";
import About from "./container/About/About";
import Error404 from "./container/Error404/Error404";
import Insight1 from "./container/BlogDetails/Insight-1";
import Insight2 from "./container/BlogDetails/Insight-2";
import Insight3 from "./container/BlogDetails/Insight-3";
import Insight4 from "./container/BlogDetails/Insight-4";
import Insight5 from "./container/BlogDetails/Insight-5";
import Insight6 from "./container/BlogDetails/Insight-6";
import Auditing from "./container/ServicesDetails/Auditing";
import Tax from "./container/ServicesDetails/Tax";
import Consulting from "./container/ServicesDetails/Consulting";
import Cfo from "./container/ServicesDetails/CFO";
import Scrolltotop from './component/Scroll-to-top/index'
import Success from "./component/Success/Success";
// import BlogDetails from "./container/BlogDetails/BlogDetails";
function App() {
  return (
    <div className="App">
      <Router>
        <Scrolltotop/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/insights" element={<Insights />} />
          {/* <Route exact path="/insights/:id" element={<BlogDetails />} /> */}
          <Route exact path="/insights/1" element={<Insight1 />} />
          <Route exact path="/insights/2" element={<Insight2 />} />
          <Route exact path="/insights/3" element={<Insight3 />} />
          <Route exact path="/insights/4" element={<Insight4 />} />
          <Route exact path="/insights/5" element={<Insight5 />} />
          <Route exact path="/insights/6" element={<Insight6 />} />
          <Route exact path="/services" element={<Services />} />
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
