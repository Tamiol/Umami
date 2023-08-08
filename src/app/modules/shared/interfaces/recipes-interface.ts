import { Ingredient } from './ingredients-interface';

export interface Recipe {
  id: number;
  name: string;
  createdAt: Date;
  ingredients: Ingredient[];
  readyInMinutes: number;
  instructions: string;
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  imageUrl: string;
}
