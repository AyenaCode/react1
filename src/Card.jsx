import { PropTypes } from "prop-types";

export const Card = ({ cook }) => {
  return (
    <li className="card border-accent border grow shrink-0 basis-[20%] m-2 p-2 bg-blue-800">
      <h2 className="text-center m-2 text-xl font-bold">{cook.strMeal}</h2>
      <p className="text-center p-2">Origin : {cook.strArea} </p>
      <img
        className="rounded-md w-[100%]"
        src={cook.strMealThumb}
        alt={`image ${cook.strMeal}`}
      />
      <p className="line-clamp-6 p-4">{cook.strInstructions}</p>
    </li>
  );
};

Card.propTypes = {
  cook: PropTypes.object.isRequired,
};
