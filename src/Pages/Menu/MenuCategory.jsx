import MenuItemSlat from "../../Components/common/MenuItemSlat";
import Cover from "../Shared/Cover/Cover";


const MenuCategory = ({ items, title, img }) => {

  return (
    <div>
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid gap-x-10 md:grid-cols-2 mx-14 my-10">
        {
          items.map(item => <MenuItemSlat key={item._id} item={item} />)
        }
      </div>
    </div>
  );
};

export default MenuCategory;