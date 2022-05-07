import { useEffect, useState } from "react";
import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  //database management state
  const [meals, setMeals] = useState([]);

  //handling a loading state
  const [loading, setLoading] = useState(true);

  //error handling
  const [errorMessage, setError] = useState(null);

  //fetching data from firebase
  useEffect(() => {
    const fetchMeals = async () => {
      const responseData = await fetch(
        "https://food-order-app-17bd8-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );

      if (!responseData.ok) {
        throw new Error("Woops, something went wrong.");
      }

      const response = await responseData.json();

      const loadedMeals = [];

      for (const key in response) {
        loadedMeals.push({
          id: key,
          name: response[key].name,
          description: response[key].description,
          price: response[key].price,
        });
      }

      setMeals(loadedMeals);
      setLoading(false);
    };

    fetchMeals().catch((error) => {
      setLoading(false);
      setError(error.message);
    });
  }, []);

  if (loading) {
    return (
      <Card>
        <p className={styles.loading}>Loading</p>
      </Card>
    );
  }

  if (errorMessage) {
    return (
      <Card>
        <p className={styles.error}>{errorMessage}</p>
      </Card>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
