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
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';


@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [HomePage, DrinkComponent, OrderDetailsComponent, OrderConfirmationComponent],
  providers: [
    {
      provide: DrinkRepository,
      useClass: DrinkRepositoryDummyImplService,
    },
    PriceCalculatorService,
  ],
})
export class HomePageModule {}
