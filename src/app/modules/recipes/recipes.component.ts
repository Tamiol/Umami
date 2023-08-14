import { Component, OnInit } from '@angular/core';
import { RecipesApiService } from '../core/services/recipes-api.service';
import { Recipe } from '../shared/interfaces/recipes-interface';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  constructor(private apiService: RecipesApiService) {}

  recipes: Recipe[] = [];

  ngOnInit(): void {
    this.apiService.getRecipes().subscribe({
      next: (recipes) => (this.recipes = recipes),
    });
  }

  searchRecipe(recipeName: string) {
    this.apiService.getRecipeByName(recipeName).subscribe({
      next: (recipes) => (this.recipes = recipes),
    });
  }
}
