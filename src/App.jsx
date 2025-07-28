import { useState } from "react";
import "./App.css";
import Container from "./components/Container";
import FoodData from "./components/FoodData";
import FoodDetails from "./components/FoodDetails";
import InnerContainer from "./components/InnerContainer";
import Nav from "./components/Nav";
import Search from "./components/Search";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("656329");
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodData setFoodId={setFoodId} foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
