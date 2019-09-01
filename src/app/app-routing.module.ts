import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "favorites", component: FavoritesComponent},
  {path: "", redirectTo:"home", pathMatch:"full"},
  {path:"**",component:Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
