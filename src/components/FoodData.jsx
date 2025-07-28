import FoodList from "./FoodList";

export default function FoodData({ foodData, setFoodId }) {
  return (
    <div>
      {foodData.map((food) => (
        <FoodList food={food} setFoodId={setFoodId} key={food.title} />
      ))}
    </div>
  );
}
