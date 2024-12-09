import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinkComponent } from './components/drink/drink.component';

const routes: Routes = [
  {
    path: 'drink',
    component: DrinkComponent,
  },

  {
    path: '',
    redirectTo: 'drink',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
