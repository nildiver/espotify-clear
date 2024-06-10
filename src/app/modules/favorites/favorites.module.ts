import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritepegeComponent } from './pages/favoritepege/favoritepege.component';
import { SharedModule } from '@shared/Shared.Module';


@NgModule({
  declarations: [
    FavoritepegeComponent
  ],
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    SharedModule
  ]
})
export class FavoritesModule { }
