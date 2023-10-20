import { Component, OnInit } from '@angular/core';
import { RecipesApiService } from '../core/services/recipes-api.service';
import { Recipe } from '../shared/interfaces/recipes-interface';
import { AppState } from 'src/app/store/app.reducer';
import { User } from '../core/models/auth.model';
import { Observable } from 'rxjs';
import { selectAuthUser } from '../auth/store/auth.selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  constructor(
    private apiService: RecipesApiService,
    private store: Store<AppState>
  ) {}

  user$: Observable<User | null> = this.store.select(selectAuthUser);

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
