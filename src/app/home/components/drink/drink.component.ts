import { Component, OnInit } from '@angular/core';
import { Drink, DrinkSize } from '../../data/drink';
import { DrinkRepository } from '../../repository/drink-repository';
import { PriceCalculatorService } from '../../repository/price-calculator-service.service.spec';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.scss'],
})
export class DrinkComponent implements OnInit {
  drinks: Drink[] = [];
  selectedDrink: Drink | null = null;
  selectedSize: DrinkSize = DrinkSize.Small; // Typage avec DrinkSize
  extras = { sugar: false, whippedCream: false };
  totalPrice: number = 0;

  constructor(
    private priceCalculator: PriceCalculatorService, // Service pour calculer le prix
    private drinkRepository: DrinkRepository // Récupération des boissons
  ) {}

  ngOnInit() {
    this.drinks = this.drinkRepository.drinks;
  }

  updateTotal() {
    if (this.selectedDrink) {
      this.totalPrice = this.priceCalculator.calculateTotal(
        this.selectedDrink,
        this.selectedSize,
        this.extras
      );
    }
  }

  purchase() {
    if (this.totalPrice > 0) {
      console.log(`Purchased ${this.selectedDrink?.name} for $${this.totalPrice}`);
    } else {
      console.log('Please select a drink and size.');
    }
  }
}
