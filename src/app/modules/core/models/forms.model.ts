import { FormControl } from '@angular/forms';

export interface LoginForm {
  login: FormControl<string>;
  password: FormControl<string>;
}

export interface RegisterForm extends LoginForm {
  email: FormControl<string>;
  repeatedPassword: FormControl<string>;
}

export interface IngredientForm {
  name: FormControl<string>;
  amount: FormControl<string>;
  unit: FormControl<string>;
}

export interface RecipeForm {
  name: FormControl<string>;
  // ingredients:
  readyInMinutes: FormControl<string>;
  instructions: FormControl<string>;
  vegetarian: FormControl<boolean>;
  vegan: FormControl<boolean>;
  glutenFree: FormControl<boolean>;
  imageUrl: FormControl<string>;
}
