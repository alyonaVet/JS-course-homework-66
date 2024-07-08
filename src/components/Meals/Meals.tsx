import React from 'react';
import {Meal} from '../../types';
import MealItem from './MealItem';

interface MealsProps {
  meals: Meal[];
  editMeal: (meal: Meal) => void;
  deleteMeal: (id: string) => void;
}
const Meals: React.FC<MealsProps> = ({meals, editMeal, deleteMeal}) => {
  return (
    <div className="container">
      {meals.map((meal: Meal) => (
        <MealItem
          key={meal.id}
          meal={meal}
          onEdit={() => editMeal(meal)}
          onDelete={() => deleteMeal(meal.id)}
        />
      ))}
    </div>
  );
};

export default Meals;