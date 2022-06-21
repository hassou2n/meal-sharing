const { request, response } = require("express");
const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    const reservations = await knex("reservation");
    response.json(reservations);
  } catch (error) {
    throw error;
  }
});

router.post("/", async (request, response) => {
  const rReservations = request.body;
  const addsaNewR = await knex("reservation").insert(rReservations);
  response.json(addsaNewR);
});

router.get("/:id", async (request, response) => {
  const id = request.params.id;
  const returnsRById = await knex("reservation").where({ id: id });
  response.json(returnsRById);
});

router.put("/:id", async (request, response) => {
  const id = request.params.id;
  const rId = request.body;
  const updatesTheRById = await knex("reservation")
    .where({ id: id })
    .update(rId);
  response.json(updatesTheRById);
});

router.delete("/:id", async (request, response) => {
  const id = request.params.id;
  const rId = request.body;
  const deletesTheRById = await knex("reservation").where({ id: id }).del(rId);
  response.json(deletesTheRById);
});

module.exports = router;
