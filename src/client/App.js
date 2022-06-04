import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TestComponent from './components/TestComponent/TestComponent';
import MealsList from './components/MealsList';
import { useMeals } from './components/UseMeals';
import { MealsProvider } from './components/MealsContext';
import { MealById } from './components/MealByID';
import { AddMeal } from './components/AddMeal';
import { Header } from './components/Header';
import { Home } from "./components/Home"
import Footer from './components/Footer'

function App() {
  const { isLoading, meals } = useMeals();


  const contextValue = { isLoading, meals }

  function refreshPage() {
    window.location.reload(false);
  }
  
  return (
    <MealsProvider value={contextValue}>
      <Header></Header>
      <Router>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/meals">
          <MealsList/>
        </Route>
        <Route exact path="/meal/:mealId">
          <MealById />
        </Route>
        <Route exact path="/addMeal">
          <AddMeal />
        </Route>
        <Route exact path="/test-component">
          <TestComponent></TestComponent>
        </Route>
      </Router>
      <div>

      </div>
      <Footer></Footer>
    </MealsProvider>
  );
}

export default App;
