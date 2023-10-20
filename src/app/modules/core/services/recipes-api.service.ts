import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostRecipe, Recipe } from '../../shared/interfaces/recipes-interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RecipesApiService {
  private apiServerUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.apiServerUrl}/catalog`);
  }

  getRecipe(index: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.apiServerUrl}/catalog/${index}`);
  }

  getRecipeByName(recipeName: string): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(
      `${this.apiServerUrl}/catalog?name=${recipeName}`
    );
  }

  postRecipe(recipe: PostRecipe): Observable<Object> {
    return this.http.post(`${this.apiServerUrl}/catalog`, recipe, {
      withCredentials: true,
    });
  }
}
