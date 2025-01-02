
const MenuItemSlat = ({item}) => {
  const {name, image, price, recipe } = item;
  return (
    <div className="flex gap-3 my-5 ">
      <img src={image} className="w-28" style={{borderRadius: "0 200px 200px 200px" }} alt="" />
      <div>
        <h3 className="uppercase font-medium mb-1">{name} ------------------</h3>
        <p className="text-gray-500">{recipe}</p>
      </div>
      <span className="text-orange-600 font-medium">${price}</span>
    </div>
  );
};

export default MenuItemSlat;