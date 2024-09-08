import { PropTypes } from "prop-types";

export const Card = ({ children }) => {
  return (
    <li className="card grow shrink-0 basis-[20%] m-2 p-2 bg-blue-800">
      {children}
    </li>
  );
};

Card.propTypes = {
  children: PropTypes.string.isRequired,
};
