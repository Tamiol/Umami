import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './recipes.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';

@NgModule({
  declarations: [RecipesComponent, RecipeCardComponent, RecipeDetailsComponent],
  imports: [CommonModule, RecipesRoutingModule],
  exports: [RecipesComponent],
})
export class RecipesModule {}
