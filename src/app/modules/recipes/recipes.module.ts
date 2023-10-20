import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './recipes.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { SharedModule } from '../shared/shared.module';
import { RecipeAddFormComponent } from './recipe-add-form/recipe-add-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeCardComponent,
    RecipeDetailsComponent,
    RecipeAddFormComponent,
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  exports: [RecipesComponent],
})
export class RecipesModule {}
