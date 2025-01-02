import FoodCard from "../../Components/common/FoodCard";

const OrderTabCollection = ({items}) => {
  return (
    <div className="grid md:grid-cols-3 gap-5 lg:gap-10">
      {
        items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
      }
    </div>
  );
};

export default OrderTabCollection;