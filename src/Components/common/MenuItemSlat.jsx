
const MenuItemSlat = ({img, title, price}) => {
  return (
    <div className="flex gap-3 w-1/2 my-5 ">
      <img src={img} className="w-28" style={{borderRadius: "0 200px 200px 200px" }} alt="" />
      <div>
        <h3 className="uppercase font-medium mb-1">{title} ------------------</h3>
        <p className="text-gray-500">Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
      </div>
      <span className="text-orange-600 font-medium">${price}</span>
    </div>
  );
};

export default MenuItemSlat;