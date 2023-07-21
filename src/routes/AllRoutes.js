import { Routes, Route } from "react-router-dom";

import { ContactUs } from "../pages/Contact";
import {
  About,
  MyWorks,
  Home,
  Contact,
} from "../pages";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="about" element={<About />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="myworks" element={<MyWorks />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
};
