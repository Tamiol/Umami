import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../../shared/interfaces/recipes-interface';
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
}
