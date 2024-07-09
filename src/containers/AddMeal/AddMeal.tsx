import axiosApi from '../../axiosApi';
import { useNavigate } from 'react-router-dom';
import MealForm from '../../components/MealForm/MealForm';
import {ApiMeal} from '../../types';
import {useState} from 'react';

const AddMeal = () => {
  const navigate = useNavigate();
  const [saving, setSaving] = useState(false);


  const createMeal = async (meal: ApiMeal) => {
    try {
      setSaving(true)
      await axiosApi.post('meals.json', meal);
    } finally {
      setSaving(false);
      navigate('/');
    }
  };

  return (
    <div className="container mt-4">
      <h4>Add meal</h4>
        <MealForm onSubmit={createMeal} loading={saving} />
    </div>
  );
};

export default AddMeal;
