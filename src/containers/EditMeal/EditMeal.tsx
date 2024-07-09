import {useParams} from 'react-router-dom';
import {useCallback, useEffect, useState} from 'react';
import axiosApi from '../../axiosApi';
import {ApiMeal} from '../../types';
import MealForm from '../../components/MealForm/MealForm';
import Spinner from '../../components/Spinner/Spinner';

const EditDish = () => {
  const {id} = useParams();
  const [meal, setMeal] = useState<ApiMeal | null>(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);


  const fetchOneMeal = useCallback(async () => {
    try {
      setLoading(true);
      const {data: meal} = await axiosApi.get<ApiMeal | null>(`/meals/${id}.json`);
      setMeal(meal);
    } finally {
      setLoading(false);
    }
  }, [id]);

  const updateMeal = async (meal: ApiMeal) => {
    try {
      setSaving(true);
      await axiosApi.put(`/meals/${id}.json`, meal);
    } finally {
      setSaving(false);
    }
  };

  useEffect(() => {
    void fetchOneMeal();
  }, [fetchOneMeal]);

  return (
    <div className="container mt-4">
      <h4>Edit meal</h4>
      {loading ? (
        <Spinner/>
      ) : (
        meal && <MealForm onSubmit={updateMeal} existingMeal={meal} loading={saving}/>
      )}
    </div>
  );
};

export default EditDish;
