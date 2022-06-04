import React from 'react';
import { Link } from 'react-router-dom';
import mealsContext from './MealsContext';
import { useMeals } from './UseMeals';
import './Style.css'

export default function MealsList() {
  const { isLoading, meals } = React.useContext(mealsContext);

  const mealsToRender = isLoading
    ? 'No meals'
    : meals.map((aMeal) => {
        return (
        <li className='recipeMealsContainer' key={aMeal.idMeals}>
        <Link to={`/meal/${aMeal.idMeals}`}>{aMeal.title}</Link>
        <span>{aMeal.description}</span>
        <span>{aMeal.price} DKK </span>
        </li>
        )
      });

  return (
    <div className='containerMeals'>
      <ul className='recipeMealsList'>{mealsToRender}</ul>
    </div>
  );
}

