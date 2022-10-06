import React from "react";
import { useLoaderData } from "react-router-dom";

const MealDetails = () => {
  const mealDeata = useLoaderData();
  console.log(mealDeata);
  return (
    <div>
      <h1>hle</h1>
    </div>
  );
};

export default MealDetails;
