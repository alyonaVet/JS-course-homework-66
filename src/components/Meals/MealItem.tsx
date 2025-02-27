import React from 'react';
import {Meal} from '../../types';
import {NavLink} from 'react-router-dom';

interface MealCardProps {
  meal: Meal;
  onEdit: VoidFunction;
  onDelete: VoidFunction;
  disabled: boolean;
}

const MealItem: React.FC<MealCardProps> = ({meal, onEdit, onDelete, disabled}) => {
  return (
    <div className="d-flex align-items-center mb-3 border border-success-subtle rounded-1 p-3 w-100">
      <div className="col-8">
        <p className="mt-2 text-secondary">{meal.receptionTime}</p>
        <p className="fs-5">{meal.description}</p>
      </div>
      <div className="col-2">
        <p className="fw-semibold">{meal.calories} kcal</p>
      </div>
      <div className="col-2">
        <NavLink
          to={`meals/edit-meal/${meal.id}`}
          className="btn btn-secondary me-3 px-4"
          onClick={onEdit}
        >
          Edit
        </NavLink>
        <button
          className="btn btn-danger"
          onClick={onDelete}
          disabled={disabled}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default MealItem;