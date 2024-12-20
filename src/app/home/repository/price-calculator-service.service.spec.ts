import { Injectable } from '@angular/core';
import { Drink, DrinkSize } from '../data/drink';

@Injectable({
  providedIn: 'root',
})
export class PriceCalculatorService {
  calculateTotal(drink: Drink, size: DrinkSize, extras: { sugar: boolean; whippedCream: boolean }): number {
    const basePrice = drink.prices[size];
    const extraCost = this.calculateExtrasCost(extras);
    return basePrice + extraCost;
  }

  private calculateExtrasCost(extras: { sugar: boolean; whippedCream: boolean }): number {
    let extraCost = 0;
    if (extras.sugar) extraCost += 0;
    if (extras.whippedCream) extraCost += 1.5;
    return extraCost;
  }
}
