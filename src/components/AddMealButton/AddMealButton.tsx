import {NavLink} from 'react-router-dom';

const AddMealButton = () => {
  return (
    <NavLink
      to={`meals/add-meal`}
      className="btn btn-outline-success me-3 px-4"
    >
      Add new meal
    </NavLink>
  );
};

export default AddMealButton;