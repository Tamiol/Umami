import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './recipes.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';

@NgModule({
  declarations: [RecipesComponent, RecipesListComponent, RecipeDetailsComponent],
  imports: [CommonModule, RecipesRoutingModule],
  exports: [RecipesComponent],
})
export class RecipesModule {}
