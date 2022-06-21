import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TestComponent from "./components/TestComponent/TestComponent";
import MealsList from "./components/MealsList";
import { useMeals } from "./components/UseMeals";
import { MealsProvider } from "./components/MealsContext";
import { MealById } from "./components/MealByID";
import { AddMeal } from "./components/AddMeal";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import Footer from "./components/Footer";

function App() {
  const { isLoading, meals } = useMeals();

  const contextValue = { isLoading, meals };

  return (
    <Router>
      <Header />
      <MealsProvider value={contextValue}>
        <Switch>
          <Route exact to path="/">
            <Home />
          </Route>
          <Route exact to path="/meals">
            <MealsList />
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
        </Switch>
        <Footer />
      </MealsProvider>
    </Router>
  );
}

export default App;
