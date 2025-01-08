import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const FoodCard = ({ item }) => {
  const { _id, name, image, price, recipe, } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();

  const handleAddToCart = food => {
    // console.log(food, user.email);
    if (user && user.email) {
      // TODO: send data to database
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      }
      axiosSecure.post("/carts", cartItem)
        .then(res => {
          // console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              title: "Added!",
              text: "Successfully added item to Cart",
              icon: "success"
            });
          }
        })

    }
    else {
      Swal.fire({
        title: "Please login to add the cart.",
        // text: "Please login to add the cart.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  }

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes" />
      </figure>
      <span className="absolute right-3 top-3 bg-neutral text-white font-medium px-2 rounded-sm">${price}</span>
      <div className="card-body items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button onClick={() => handleAddToCart(item)} className="btn btn-outline  border-b-4 border-indigo-600">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;