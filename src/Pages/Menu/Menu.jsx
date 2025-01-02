import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuCover from "../../assets/menu/banner3.jpg"
import SectionHeading from "../../Components/common/SectionHeading";
const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuCover} title="Our Menu"></Cover>
      <SectionHeading heading="Today's Offer" subheading="Don't miss" />

    </div>
  );
};

export default Menu;