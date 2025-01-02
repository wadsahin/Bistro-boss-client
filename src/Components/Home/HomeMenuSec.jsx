import MenuItemSlat from "../common/MenuItemSlat";
import img1 from "../../assets/menu/salad-bg.jpg"
import img2 from "../../assets/menu/soup-bg.jpg"
import img3 from "../../assets/menu/pizza-bg.jpg"
import img4 from "../../assets/menu/dessert-bg.jpeg"
import useMenu from "../../Hooks/useMenu";

const HomeMenuSec = () => {
  const [menu] = useMenu();
  const popular = menu.filter(item => item.category === "popular");
  console.log(popular);
  return (
    <div className="mb-10 mx-16">
      <div className="grid gap-5 md:grid-cols-2">
        {
          popular.map(item => <MenuItemSlat key={item._id} item={item}  />)
        }
      </div>
    </div>
  );
};

export default HomeMenuSec;