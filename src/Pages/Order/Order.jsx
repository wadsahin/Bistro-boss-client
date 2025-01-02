import { Helmet } from "react-helmet-async";
import useMenu from "../../Hooks/useMenu";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Cover from "../Shared/Cover/Cover";
import orderCoverImg from "../../assets/shop/banner2.jpg";
import { useState } from "react";
import FoodCard from "../../Components/common/FoodCard";
import OrderTabCollection from "./OrderTabCollection";
import { useParams } from "react-router-dom";

const Order = () => {
  const categories = ['offers','salads', 'pizza', 'soups', 'desserts'];
  const {category} = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);

  
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
        <title>Bistro Boss | Order</title>
      </Helmet>
      <Cover img={orderCoverImg} title="Order Food"></Cover>
      <br />
      <Tabs className="text-center" defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Offers</Tab>
          <Tab>Salads</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soups</Tab>
          <Tab>Desserts</Tab>
          {/* <Tab>Drinks</Tab> */}
        </TabList>
        <TabPanel>
          <OrderTabCollection items={offered} />
        </TabPanel>
        <TabPanel>
          <OrderTabCollection items={salads} />
        </TabPanel>
        <TabPanel>
          <OrderTabCollection items={pizzas} />
        </TabPanel>
        <TabPanel>
          <OrderTabCollection items={soups} />
        </TabPanel>
        <TabPanel>
          <OrderTabCollection items={desserts} />
        </TabPanel>
        {/* <TabPanel>
          <OrderTabCollection items={drinks} />
        </TabPanel> */}

      </Tabs>
      <br />
    </div>
  );
};

export default Order;