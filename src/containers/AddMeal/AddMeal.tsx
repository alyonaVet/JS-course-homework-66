import axiosApi from '../../axiosApi';
import { useNavigate } from 'react-router-dom';
import MealForm from '../../components/MealForm/MealForm';
import {ApiMeal} from '../../types';

const NewDish = () => {
  const navigate = useNavigate();

  const createMeal = async (meal: ApiMeal) => {
    await axiosApi.post('meals.json', meal);
    navigate('/');
  };

  return (
    <div className="container mt-4">
      <h4>Add meal</h4>
        <MealForm onSubmit={createMeal} />
    </div>
  );
};

export default NewDish;
