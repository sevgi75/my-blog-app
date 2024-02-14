import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
// import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import NavBar from "../components/NavBar";
import FooTer from "../components/FooTer";
import NewBlog from "../pages/NewBlog";
import About from "../pages/About";

const AppRouter = () => {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/newBlog" element={<NewBlog />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/login" element={<Login />} />
        <Route path="register" element={<Register />} />
        {/* <Route path="stock" element={<PrivateRouter />}>
          <Route path="" element={<Dashboard />} />
        </Route> */}
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <FooTer />
    </BrowserRouter>
  );
};

export default AppRouter;
