import { Component, Input } from '@angular/core';
import { Recipe } from '../../shared/interfaces/recipes-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
})
export class RecipesListComponent {
  @Input() recipe!: Recipe;

  constructor(private router: Router) {}

  navigateToDetails() {
    this.router.navigate(['/recipe', this.recipe.id]);
  }
}
