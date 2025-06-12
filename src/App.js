import { Routes, Route, useLocation } from "react-router-dom";
import Main from "./main/first_title.js";
import Louis_bag from "./sail/루이비통/Louis_bag.js";
import Louis_shoes from "./sail/루이비통/Louis_shoes.jsx";
import Louis_shirt from "./sail/루이비통/Louis_shirt.jsx";
import Hunter from "./sail/헌터/Hunter.js";
import Gucci from "./sail/구찌/Gucci.js";
import MM6 from "./sail/엠엠/MM.js";
import Buburry from "./sail/버버리/Buburry.js";
import Chrome from "./sail/크롬/Chrome.js";
import Selin from "./sail/셀린느/Selin.js";
import Login from "./sail/로그/login.js"

function App() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/Main" element={<Main />} />
      <Route path="/Louis/bag" element={<Louis_bag />} />
      <Route path="/Louis/shoes" element={<Louis_shoes />} />
      <Route path="/Louis/shirt" element={<Louis_shirt />} />
      <Route path="/Hunter/bag" element={<Hunter />} />
      <Route path="/Gucci/bag" element={<Gucci />} />
      <Route path="/Buburry/bag" element={<Buburry />} />
      <Route path="/MM6/bag" element={<MM6 />} />
      <Route path="/Chrome/bag" element={<Chrome />} />
      <Route path="/Selin/bag" element={<Selin />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
}

export default App;