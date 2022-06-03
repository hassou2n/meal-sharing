import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TestComponent from './components/TestComponent/TestComponent';
import './App.css'
import MealsList from './components/MealsList';
import { useMeals } from './components/UseMeals';
import { MealsProvider } from './components/MealsContext';
import { MealById } from './components/MealByID';
import { Header } from './components/Header';
import Footer from './components/Footer'

function App() {
  const { isLoading, meals } = useMeals();


  const contextValue = { isLoading, meals }

  return (
    <MealsProvider value={contextValue}>
      <Header></Header>
      <Router>
        <Route exact path="/">
          <MealsList />
        </Route>
        <Route exact path="/meal/:mealId">
          <MealById />
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
