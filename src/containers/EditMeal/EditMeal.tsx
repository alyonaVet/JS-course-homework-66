import {useParams} from 'react-router-dom';
import {useCallback, useEffect, useState} from 'react';
import axiosApi from '../../axiosApi';
import {ApiMeal} from '../../types';
import MealForm from '../../components/MealForm/MealForm';

const EditDish = () => {
  const {id} = useParams();
  const [meal, setMeal] = useState<ApiMeal | null>(null);

  const fetchOneMeal = useCallback(async () => {
    const {data: meal} = await axiosApi.get<ApiMeal | null>(`/meals/${id}.json`);

    setMeal(meal);
  }, [id]);

  const updateMeal = async (meal: ApiMeal) => {
    await axiosApi.put(`/meals/${id}.json`, meal);
  };

  useEffect(() => {
    void fetchOneMeal();
  }, [fetchOneMeal]);

  return (
    <div className="container mt-4">
      <h4>Edit meal</h4>
      <div className="col">
        {meal && <MealForm onSubmit={updateMeal} existingMeal={meal}/>}
      </div>
    </div>
  );
};

export default EditDish;
