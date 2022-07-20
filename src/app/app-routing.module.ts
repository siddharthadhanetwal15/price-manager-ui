import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PriceManagerComponent} from './components/price-manager/price-manager.component';
import {PriceViewerComponent} from './components/price-viewer/price-viewer.component';

const routes: Routes = [
  {path: '', redirectTo: 'priceviewer', pathMatch: 'full'},
  {path: 'pricemanager', component: PriceManagerComponent},
  {path: 'priceviewer', component: PriceViewerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
