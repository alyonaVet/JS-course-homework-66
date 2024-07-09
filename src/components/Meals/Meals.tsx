import React from 'react';
import {Meal} from '../../types';
import MealItem from './MealItem';
import Spinner from '../Spinner/Spinner';

interface MealsProps {
  meals: Meal[];
  editMeal: (meal: Meal) => void;
  deleteMeal: (id: string) => void;
  contentLoading: boolean;
  deletingMeal: string | null;
}
const Meals: React.FC<MealsProps> = ({meals, editMeal, deleteMeal, contentLoading, deletingMeal}) => {
  return (
    <div className="container">
      {contentLoading ? (
        <Spinner />
      ) : (
        meals.map((meal: Meal) => (
          <MealItem
            key={meal.id}
            meal={meal}
            onEdit={() => editMeal(meal)}
            onDelete={() => deleteMeal(meal.id)}
            disabled={deletingMeal === meal.id}
          />
        ))
      )}
    </div>
  );
};

export default Meals;