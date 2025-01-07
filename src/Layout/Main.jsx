import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import useAuth from "../Hooks/useAuth";

const Main = () => {
  const { loading } = useAuth();
  const location = useLocation();
  // console.log(location.pathname)
  const noNavbarFooter = location.pathname.includes("login") || location.pathname.includes("register");

  return (
    <div>
      {noNavbarFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      {noNavbarFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;