import { useEffect, useState } from "react";
import "./search.css"

const URL = "https://api.spoonacular.com/recipes/complexSearch";

const API_KEY = "d540a14439a14548884766fcd6210be6";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      setFoodData(data.results);
      console.log(data.results);
    }
    fetchFood();
  }, [query]);

  return (
    <div className="search">
      <input className="input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
}
