
const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes" />
      </figure>
      <div className="card-body items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline  border-b-4 border-indigo-600">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;