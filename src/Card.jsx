import { PropTypes } from "prop-types";

export const Card = ({ children }) => {
  return <li className="card m-2 p-8 bg-blue-800">{children}</li>;
};

Card.propTypes = {
  children: PropTypes.string.isRequired,
};
