import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import { HomeModule } from './modules/home/home.module';
import { RecipesModule } from './modules/recipes/recipes.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './modules/auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './modules/auth/store/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './modules/auth/store/auth.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    HomeModule,
    AuthModule,
    RecipesModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ auth: authReducer }),
    EffectsModule.forRoot([AuthEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
