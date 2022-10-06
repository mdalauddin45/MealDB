import React from "react";
import { Link } from "react-router-dom";

const Meal = ({ meal }) => {
  const { strMeal, strMealThumb, strMeasure1, idMeal } = meal;
  return (
    <Link to={`../meal/${strMeal}`}>
      <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
        <img
          className="object-cover w-full h-56 md:h-64 xl:h-80"
          src={strMealThumb}
          alt=""
        />
        <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
          <p className="mb-4 text-lg font-bold text-gray-100">{strMeal}</p>
          <br />
          <p className="text-sm tracking-wide text-gray-300">{strMeasure1}</p>
          <br />
          <p className="text-sm tracking-wide text-gray-300">Price: $500</p>
        </div>
      </div>
    </Link>
  );
};

export default Meal;
