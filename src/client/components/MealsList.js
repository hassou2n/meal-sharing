import React from 'react';
import { Link } from 'react-router-dom';
import mealsContext from './MealsContext';
import { useMeals } from './UseMeals';
import './Style.css'

function MealsList() {
  const { isLoading, meals } = React.useContext(mealsContext);

  const mealsToRender = isLoading
    ? 'not yet'
    : meals.map((aMeal) => {
        return (
        <li className='recipeMealsContainer' key={aMeal.idmeals}><Link to={`/meal/${aMeal.idmeals}`}>{aMeal.title}</Link>
        <span>{aMeal.description}</span>
        <span>{aMeal.price}</span>
        </li>
        )
      });

  return (
    <div className='containerMeals'>
      <ul className='recipeMealsList'>{mealsToRender}</ul>
    </div>
  );
}

export default MealsList;
