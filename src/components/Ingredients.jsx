import "./ingredients.css";

export default function Ingredients({ food }) {
  return (
    <div>
      {food.extendedIngredients?.map((item) => (
        <div className="container">
          <div className="imagecontainer">
            <img
              className="img"
              src={
                `https://spoonacular.com/cdn/ingredients_100x100/` + item.image
              }
              alt=""
            />
          </div>
          <div className="namecontainer">
            <div className="name">{item.name}</div>
            <div className="amount">
              {item.amount}
              {item.unit}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
