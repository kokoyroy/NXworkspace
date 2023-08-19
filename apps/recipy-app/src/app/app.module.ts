import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HeaderComponent } from './components/Header/header.component';
import { FooterComponent } from './components/Footer/footer.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { RecipesListComponent } from './pages/recipes/recipes-list/recipes-list.component';
import { RecipyDetailsComponent } from './pages/recipes/recipy-details/recipy-details.component';
import { RecipyListItemComponent } from './pages/recipes/recipes-list/recipy-list-item/recipy-list-item.component';
import { ShoppingListComponent } from './pages/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './pages/shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    HeaderComponent,
    FooterComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipyDetailsComponent,
    RecipyListItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RecipesListComponent],
})
export class AppModule {}
