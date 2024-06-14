import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistorypagesComponent } from './pages/historypages/historypages.component';

const routes: Routes = [
  {
    path:'',
    component: HistorypagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule { }
