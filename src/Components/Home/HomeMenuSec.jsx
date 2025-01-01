import MenuItemSlat from "../common/MenuItemSlat";
import img1 from "../../assets/menu/salad-bg.jpg"
import img2 from "../../assets/menu/soup-bg.jpg"
import img3 from "../../assets/menu/pizza-bg.jpg"
import img4 from "../../assets/menu/dessert-bg.jpeg"

const HomeMenuSec = () => {
  return (
    <div className="mb-10">
      <div className="md:flex gap-10 px-5">
        <MenuItemSlat img={img1} title="Yummy Salads" price="11.4" />
        <MenuItemSlat img={img2} title="Crazy Hot Soup" price="14.6" />
      </div>
      <div className="md:flex gap-10 px-5">
        <MenuItemSlat img={img3} title="Crezzy Pizza" price="11.4" />
        <MenuItemSlat img={img4} title="Lovely Dessert" price="14.6" />
      </div>
      <div className="md:flex gap-10 px-5">
        <MenuItemSlat img={img2} title="Yummy Soup" price="11.4" />
        <MenuItemSlat img={img1} title="Authentic Salad" price="14.6" />
      </div>
    </div>
  );
};

export default HomeMenuSec;