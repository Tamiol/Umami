import { Component, Input, OnInit } from '@angular/core';
import { RecipesApiService } from '../../core/services/recipes-api.service';
import { Recipe } from '../../shared/interfaces/recipes-interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recipe | undefined;
  id!: number;

  constructor(
    private apiService: RecipesApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });

    this.apiService.getRecipe(this.id).subscribe({
      next: (recipe) => {
        this.recipe = recipe;
      },
    });
  }
}
