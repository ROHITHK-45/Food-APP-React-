import Ingredients from "./Ingredients";
import "./fooddetail.css";
import { useEffect, useState } from "react";

export default function FoodDetail({ foodid }) {
  const [food, setFood] = useState({});
  // const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodid}/information`;

  const API_KEY = "d540a14439a14548884766fcd6210be6";

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      // setIsLoading(false);
    }
    fetchFood();
  }, [foodid]);

  return (
    <div className="container">
      <div className="card">
        <h1 className="name">{food.title}</h1>

        <img className="image" src={food.image} alt="" />

        <div className="details">
          <span>
            <strong>⌚{food.readyInMinutes}:Minutes</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕Vegetarian" : "🥩Non- Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>👪{food.servings}</strong>
          </span>
          <span>
            <strong>{food.vegan ? "🐄Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          <span>
            <strong>💲{food.pricePerServing / 100} Per serving</strong>
          </span>
        </div>



         <h2 className="h2">Ingredients</h2>
        <Ingredients food={food} />
        
        {/* {isLoading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li className="li">{step.step}</li>
              ))
            )} */}


        <h2 className="h2">Instructions</h2>
        <div className="instructions">
          <ol className="ol">
            {
              food.analyzedInstructions?.[0].steps.map((step) => (
                <li className="li">{step.step}</li>
              ))
            }
          </ol>
        </div>
      </div>
    </div>
  );
}
