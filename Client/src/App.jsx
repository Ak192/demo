import { BrowserRouter, Route, Routes } from "react-router-dom";

import Landingpage from "./pages/landingpage/Landingpage";
import Login from "./pages/Authpage/Login";
import Navbar from "./component/Navbar";
import Signup from "./pages/Authpage/Signup";
import Aboutus from "./pages/aboutus/Aboutus";
import Servicepage from "./pages/service/Servicepage";
import Contactus from "./pages/contactus/Contactus";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
  <Routes>
    <Route path="/" element={<Landingpage/>} />
    <Route path='/login' element={<Login/>} />
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/aboutus" element={<Aboutus/>}/>
    <Route path='/service' element={<Servicepage/>}/>
    <Route path="/contactus" element={<Contactus/>} />

  </Routes>
    </BrowserRouter>
  )
}