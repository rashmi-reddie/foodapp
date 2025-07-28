import { useEffect, useState } from "react";
import styles from "./search.module.css";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "dd649d2035d648ec995b9fb969f862df";
export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");
  useEffect(() => {
    async function fetchFood() {
      const result = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await result.json();
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="search"
      />
    </div>
  );
}
