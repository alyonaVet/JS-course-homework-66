import {useCallback, useEffect, useState} from 'react';
import {ApiMeals, Meal} from '../../types';
import axiosApi from '../../axiosApi';
import Meals from '../../components/Meals/Meals';
import editMeal from '../EditMeal/EditMeal';
import AddMealButton from '../../components/AddMealButton/AddMealButton';
import Calories from '../../components/Calories/Calories';

const MainPage = () => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(false);
  const [deletingMeal, setDeletingMeal] = useState<string | null>(null);

  const fetchMeals = useCallback(async () => {
    try {
      setLoading(true);
      const {data: meals} = await axiosApi.get<ApiMeals | null>('/meals.json');

      if (!meals) {
        setMeals([]);
      } else {
        const newMeals = Object.keys(meals).map((id) => ({
          ...meals[id],
          id,
        }));

        setMeals(newMeals);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchMeals();
  }, [fetchMeals]);


  const deleteMeal = async (id: string) => {
    setDeletingMeal(id);
    await axiosApi.delete(`/meals/${id}.json`);
    await fetchMeals();
  };


  return (
    <>
      <div className="container d-flex justify-content-between align-items-center mt-4">
        <Calories meals={meals}/>
        <AddMealButton/>
      </div>
      <div className="mt-4">
        <Meals
          meals={meals}
          editMeal={editMeal}
          deleteMeal={deleteMeal}
          contentLoading={loading}
          deletingMeal={deletingMeal}/>
      </div>
    </>
  );
};

export default MainPage;