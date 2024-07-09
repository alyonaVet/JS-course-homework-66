export interface MealMutation {
  receptionTime: string;
  description: string;
  calories: string;
}

export interface Meal {
  id: string;
  receptionTime: string;
  description: string;
  calories: number;
}

export interface ApiMeal {
  receptionTime: string;
  description: string;
  calories: number;
}

export interface ApiMeals {
  [id: string]: ApiMeal;
}