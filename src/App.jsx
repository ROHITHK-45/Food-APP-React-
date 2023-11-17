import { useState } from "react";
import Search from "./components/search";
import Foodlist from "./components/Foodlist";
import Nav from "./components/Nav";
import "./App.css";
import Container from "./components/Container";
import Innercontainer from "./components/Innercontainer";
import FoodDetail from "./components/FoodDetail";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodid,setFoodId]= useState('656329')

  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />

      <Container>
        <Innercontainer>
          <Foodlist foodData={foodData} setFoodId={setFoodId} />
        </Innercontainer>
        
        <Innercontainer>
          <FoodDetail foodid={foodid} />
        </Innercontainer>

      </Container>
    </div>
  );
}

export default App;
