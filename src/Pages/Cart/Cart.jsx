import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../Hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure();

  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      axiosSecure.delete(`/carts/${id}`)
        .then(res => {
          if (res.data.deletedCount > 0) {
            if (result.isConfirmed) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your food item has been deleted.",
                icon: "success"
              });
            }
          }
        })


    });
  }

  return (
    <div>
      <div className="flex justify-evenly items-center">
        <h2 className="text-4xl font-medium">Items: {cart.length}</h2>
        <h2 className="text-4xl font-medium">Total Price: ${totalPrice}</h2>
        <button className="btn btn-warning">Pay</button>
      </div>
      <hr className="my-3" />
      {/* table */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              cart.map((item, idx) => <tr key={item._id}>
                <th>
                  <label>
                    {idx + 1}
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {item.name}
                </td>
                <td>${item.price}</td>
                <th>
                  <FaTrashAlt onClick={() => handleDelete(item._id)} className="text-red-600 text-lg"></FaTrashAlt>
                </th>
              </tr>)
            }
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default Cart;