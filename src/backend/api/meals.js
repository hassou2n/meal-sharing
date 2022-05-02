const { request, response } = require("express");
const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    let maxPrice = request.query.maxPrice;
    let availableReservations = request.query.availableReservations;
    let title = request.query.title;
    let createdAfter = request.query.createdAfter;
    let limit = request.query.limit;
    let limitMaxPrice = maxPrice + limit;

    if (maxPrice) {
      const resultForMaxPrice = await knex("meal").where("price", "=<",maxPrice);
      response.json(resultForMaxPrice);

    } else if (availableReservations) {

    } else if (title) {
      const resultForTitle = await knex("meal").whereLike("title","%");
      response.json(resultForTitle);

    } else if (createdAfter) {
      const resultForCreatedAfter = await knex("meal").where("created_date","<",createdAfter);
      response.json(resultForCreatedAfter);

    } else if (limit) {
      const resultlLimit = await knex("meal").where("max_reservations","=",limit);
      response.json(resultlLimit);

    } else if (limitMaxPrice) {
      const rMaxPrice = await knex("meal").where("price", ">", maxPrice);
      const rLimit = await knex("meal").where("max_reservations", "=", limit);
      const resultLimitMaxPrice = rMaxPrice + rLimit;
      response.json(resultLimitMaxPrice);
    } else {
      const meals = await knex("meal");
      response.json(meals);
    }
  } catch (error) {
    throw error;
  }
});

router.post("/", async (request, response) => {
  const rMeal = request.body;
  const addsaNewMeal = await knex("meal").insert(rMeal)
  response.json(addsaNewMeal)
});

router.get("/:id", async (request, response) => {
  const id = request.params.id
  const returnsMealById = await knex("meal").where({ id: id });
  response.json(returnsMealById);
});

router.put("/:id", async (request, response) => {
  const id = request.params.id
  const rId = request.body
  const updatesTheMealById = await knex("meal").where({ id: id }).update(rId);
  response.json(updatesTheMealById);
});

router.delete("/:id", async (request, response) => {
  const id = request.params.id
  const rId = request.body
  const deletesTheMealById = await knex("meal").where({ id: id }).del(rId);
  response.json(deletesTheMealById);
});


module.exports = router;
