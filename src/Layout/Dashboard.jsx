import { FaAd, FaCalendar, FaHome, FaList, FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400 p-3">
        <ul className="dashboard flex flex-col gap-2">
          <li><NavLink className="flex items-center gap-2  font-medium" to="/dashboard/user-home"><FaHome /> User Home</NavLink></li>
          <li><NavLink className="flex items-center gap-2  font-medium" to="/dashboard/reservation"><FaCalendar /> Reservation</NavLink></li>
          <li><NavLink className="flex items-center gap-2  font-medium" to="/dashboard/cart"><FaCartShopping /> My Cart ({cart.length})</NavLink></li>
          <li><NavLink className="flex items-center gap-2  font-medium" to="/dashboard/add-review"><FaAd /> Add a Review</NavLink></li>
          <li><NavLink className="flex items-center gap-2  font-medium" to="/dashboard/booking"><FaList /> My Booking</NavLink></li>
          <div className="divider"></div>
          <li><NavLink className="flex items-center gap-2  font-medium" to="/"><FaHome />Home</NavLink></li>
          <li><NavLink className="flex items-center gap-2  font-medium" to="/menu"><FaSearch />Menu</NavLink></li>
        </ul>
      </div>
      <div className="flex-1 p-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;