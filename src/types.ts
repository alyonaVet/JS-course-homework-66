export interface MealMutation {
  receptionTime: string;
  description: string;
  calories: string;
}

export interface Meal {
  receptionTime: string;
  description: string;
  calories: number;
}