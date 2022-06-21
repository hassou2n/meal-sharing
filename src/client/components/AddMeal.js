import React from "react";
import { useState } from "react";
import "./Style.css";

export function AddMeal() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [deliveringTime, setDeliveringTime] = useState("");
  const [maxReservations, setMaxReservations] = useState();
  const [price, setPrice] = useState();
  const [mealDone, setMealDone] = useState(false);

  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  const handleAddMealButton = async (e) => {
    if (
      title !== "" &&
      description !== "" &&
      location !== "" &&
      deliveringTime !== "" &&
      description !== "" &&
      maxReservations !== "" &&
      price !== ""
    ) {
      e.preventDefault();
      const rMeal = {
        title: title,
        description: description,
        location: location,
        delivering_time: deliveringTime,
        max_reservations: Number(maxReservations),
        price: Number(price),
        created_date: date,
      };
      try {
        setMealDone(true);
        const response = await fetch("/api/meals", {
          method: "POST",
          headers: { "Content-Type": "Application/json" },
          body: JSON.stringify(rMeal),
        });
        if (response.ok) {
          setTitle("");
          setDescription("");
          setLocation("");
          setDeliveringTime("");
          setMaxReservations();
          setPrice("");
          alert(`The meal has been successfully added ${title}.`);
          setMealDone(false);
        } else {
          alert(`Sorry!${response.status}.`);
          return;
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please complete the fields");
      return;
    }
  };

  return (
    <div className="AddMealDiv">
      <div>
        <h1>Add new meal</h1>
        <form onSubmit={handleAddMealButton}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          ></input>

          <input
            type="text"
            placeholder="Description"
            value={description}
            name="description"
            onChange={(e) => setDescription(e.target.value)}
          ></input>

          <input
            type="text"
            placeholder="location"
            value={location}
            name="location"
            onChange={(e) => setLocation(e.target.value)}
          ></input>

          <input
            type="date"
            placeholder="deliveringTime"
            name="deliveringTime"
            onChange={(e) => setDeliveringTime(e.target.value)}
          ></input>

          <input
            type="text"
            placeholder="Max number of reservations"
            value={maxReservations}
            name="max_reservations"
            onChange={(e) => setMaxReservations(e.target.value)}
          ></input>

          <input
            type="number"
            placeholder="Price"
            name="price"
            min="1"
            onChange={(e) => setPrice(e.target.value)}
          ></input>

         <div> {!mealDone ? <button>Add Meal</button> : null}</div>
        </form>
      </div>
    </div>
  );
}
