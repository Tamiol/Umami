import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeAddFormComponent } from './recipe-add-form/recipe-add-form.component';

const routes: Routes = [
  {
    path: 'recipes',
    component: RecipesComponent,
  },
  {
    path: 'recipe/:id',
    component: RecipeDetailsComponent,
  },
  {
    path: 'recipe-add',
    component: RecipeAddFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesRoutingModule {}
