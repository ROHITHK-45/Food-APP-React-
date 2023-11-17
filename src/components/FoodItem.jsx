import "./fooditem.css";

export default function FoodItem({ food, setFoodId }) {
  return (
    <div className="itemcontainer">
      <img className="image" src={food.image} alt="" />
      <div className="title">
        <p className="titlename">{food.title}</p>
      </div>
      <div className="btn-container">
        <button
          onClick={() => {
            console.log(food.id);
            setFoodId(food.id);
          }}
          className="btn"
        >
          View Recipie
        </button>
      </div>
    </div>
  );
}
