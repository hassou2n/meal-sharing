import React from "react";
import { useParams } from "react-router-dom";
import { useMeal } from "./UseMeals";

export function MealById() {
  const { mealId } = useParams();
  const { isLoading, meal } = useMeal(mealId);

  if (isLoading) {
    return <div>Loading</div>;
  }

  return <div key={meal}>{`Meal ${meal.id} ${meal.title}`}</div>;
}
