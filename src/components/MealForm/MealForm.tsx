import React, {useState} from 'react';
import {ApiMeal, MealMutation} from '../../types';

interface MealFormProps {
  onSubmit: (meal: ApiMeal) => void;
}

const MealForm: React.FC<MealFormProps> = ({onSubmit}) => {
  const [mealMutation, setMealMutation] = useState<MealMutation>({
    receptionTime: '',
    description: '',
    calories: '',
  });

  const changeMeal = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {name, value} = event.target;

    setMealMutation((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    onSubmit({
      ...mealMutation,
      calories: parseFloat(mealMutation.calories),
    });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <select
        className="form-select w-25 mb-3 mt-4"
        id="receptionTime"
        name="receptionTime"
        required
        onChange={changeMeal}
        value={mealMutation.receptionTime}
      >
        <option value="" disabled>Select Category</option>
        <option value="breakfast">Breakfast</option>
        <option value="snack">Snack</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
      </select>
      <div className="form-group mt-4">
        <textarea
          name="description"
          id="description"
          required
          className="form-control w-50"
          placeholder="Add a description"
          onChange={changeMeal}
          value={mealMutation.description}
        />
      </div>

      <div className="form-group mt-4">
        <input
          type="number"
          name="calories"
          id="calories"
          required
          className="form-control w-25 mb-3 d-inline-block"
          placeholder="Calories"
          onChange={changeMeal}
          value={mealMutation.calories}
        />
        <span className="ms-4">kcal</span>
      </div>
      <button type="submit" className="btn bg-success text-white mt-4">
        Save
      </button>
    </form>
  );
};

export default MealForm;