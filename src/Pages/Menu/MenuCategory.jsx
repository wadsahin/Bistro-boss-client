import { Link } from "react-router-dom";
import MenuItemSlat from "../../Components/common/MenuItemSlat";
import Cover from "../Shared/Cover/Cover";


const MenuCategory = ({ items, title, img }) => {

  return (
    <div className="my-10">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid gap-x-10 md:grid-cols-2 mx-14">
        {
          items.map(item => <MenuItemSlat key={item._id} item={item} />)
        }
      </div>
      <div className="w-fit mx-auto mt-5">
        <button className="btn btn-outline border-0 border-b-4"><Link to={`/order/${title}`}>Order Favourite Food</Link></button>
      </div>
    </div>
  );
};

export default MenuCategory;