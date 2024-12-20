import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { DrinkRepository } from './repository/drink-repository';
import { DrinkRepositoryDummyImplService } from './repository/drink-repository-dummy-impl.service';
import { PriceCalculatorService } from './repository/price-calculator-service.service.spec';
import { DrinkComponent } from './components/drink/drink.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [HomePage, DrinkComponent],
  providers: [
    {
      provide: DrinkRepository,
      useClass: DrinkRepositoryDummyImplService,
    },
    PriceCalculatorService,
  ],
})
export class HomePageModule {}
