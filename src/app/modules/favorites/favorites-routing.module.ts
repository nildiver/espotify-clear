import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritepegeComponent } from './pages/favoritepege/favoritepege.component';

const routes: Routes = [
  {
    path:'',
    component:FavoritepegeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoritesRoutingModule { }
