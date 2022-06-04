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
  try {
    if (
      !request.body.title ||
      !request.body.delivering_time ||
      !request.body.max_reservations ||
      !request.body.price ||
      !request.body.created_date
    ) {
      response.status(400).json({error});
      return;
    }
    const rMeal = await knex("meal").insert(request.body);
    response.json(rMeal);
  } catch (error) {
    throw error;
  }
});



router.get("/:mealId", async (request, response) => {
  const mealId = request.params.mealId
  try {
  const returnsMealById = await knex("meal").where({ id: mealId }).select("title", "id");
  response.json(returnsMealById[0]);;
} catch (error) {
  throw error;
}
});


router.put("/:mealId", async (request, response) => {
  const mealId = request.params.mealId
  const rId = request.body
  try {
  const updatesTheMealById = await knex("meal").where({ id: mealId }).update(rId);
  response.json(updatesTheMealById);
} catch (error) {
  throw error;
}
});

router.delete("/:mealId", async (request, response) => {
  const mealId = request.params.mealId
  const rId = request.body
  try {
  const deletesTheMealById = await knex("meal").where({ id: mealId }).del(rId);
  response.json(deletesTheMealById);
} catch (error) {
  throw error;
}
});


module.exports = router;
