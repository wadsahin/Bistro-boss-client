import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuCover from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import SectionHeading from "../../Components/common/SectionHeading";
import useMenu from "../../Hooks/useMenu";
import MenuCategory from "./MenuCategory";
const Menu = () => {
  const [menu] = useMenu();
  const salads = menu.filter(item => item.category === "salad");
  const drinks = menu.filter(item => item.category === "drinks");
  const soups = menu.filter(item => item.category === "soup");
  const desserts = menu.filter(item => item.category === "dessert");
  const pizzas = menu.filter(item => item.category === "pizza");
  const offered = menu.filter(item => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* main menu */}
      <Cover img={menuCover} title="Our Menu"></Cover>
      {/* Offered menu items */}
      <SectionHeading heading="Today's Offer" subheading="Don't miss" />
      <MenuCategory items={offered} title="offers" img={pizzaImg}></MenuCategory>
      {/* Dessert menu items */}
      <MenuCategory items={desserts} title="desserts" img={dessertImg}></MenuCategory>
      {/* Pizza menu items */}
      <MenuCategory items={pizzas} title="pizza" img={pizzaImg}></MenuCategory>
      {/* Salad menu items */}
      <MenuCategory items={salads} title="salads" img={saladImg}></MenuCategory>
      {/* Soup menu items */}
      <MenuCategory items={soups} title="soups" img={soupImg}></MenuCategory>

    </div>
  );
};

export default Menu;