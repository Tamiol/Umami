import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RecipeForm } from '../../core/models/forms.model';
import { FormService } from '../../core/services/form.service';
import { RecipesApiService } from '../../core/services/recipes-api.service';
import { PostRecipe } from '../../shared/interfaces/recipes-interface';

@Component({
  selector: 'app-recipe-add-form',
  templateUrl: './recipe-add-form.component.html',
  styleUrls: ['./recipe-add-form.component.scss'],
})
export class RecipeAddFormComponent {
  recipeForm: FormGroup<RecipeForm> = this.formService.initRecipeForm();
  recipeUrl = '';

  constructor(
    private formService: FormService,
    private apiService: RecipesApiService
  ) {}

  get controls() {
    return this.recipeForm.controls;
  }

  submit() {
    this.apiService.postRecipe(this.recipeForm.getRawValue()).subscribe({
      next: (Url) => (this.recipeUrl = String(Url)),
      error: (error) => console.log(error),
    });
  }
}
