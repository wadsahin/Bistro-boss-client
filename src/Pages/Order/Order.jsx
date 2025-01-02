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
  const [index, setIndex] = useState(0);
  const category = useParams();
  console.log(category);
  
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
      <Tabs className="text-center" defaultIndex={1} onSelect={(index) => setIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
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
        <TabPanel>
          <OrderTabCollection items={drinks} />
        </TabPanel>

      </Tabs>
      <br />
    </div>
  );
};

export default Order;