import React from 'react';
import {Meal} from '../../types';

interface CaloriesProps {
  meals: Meal[];
}

const Calories: React.FC<CaloriesProps> = ({meals}) => {
  const totalKcal = meals.reduce((sum, meal) => {
    return sum + meal.calories;
  }, 0);

  return (
    <div className="d-flex gap-2">
      <div className="">Total calories:</div>
      <span className="fw-semibold">{totalKcal} kcal</span>
    </div>
  );
};

export default Calories;