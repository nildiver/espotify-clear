import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistorypagesComponent } from './pages/historypages/historypages.component';
import { SearchComponent } from './components/search/search.component';
import { SharedModule } from '@shared/Shared.Module';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    HistorypagesComponent,
    SearchComponent,



  ],
  imports: [
    CommonModule,
    SharedModule,
    HistoryRoutingModule,
    FormsModule

  ]
})
export class HistoryModule { }
