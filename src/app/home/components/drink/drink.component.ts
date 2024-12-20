import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  selectedSize: DrinkSize = DrinkSize.Small;
  sliderValue: number = 0; // Position du slider
  extras = { sugar: false, whippedCream: false };
  totalPrice: number = 0;
  balance: number = 4.70;
  isSugarDisabled: boolean = false;

  constructor(
    private priceCalculator: PriceCalculatorService,
    private drinkRepository: DrinkRepository,
    private router: Router, private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.drinks = this.drinkRepository.drinks;
    this.updateTotal();
  }

  onDrinkChange() {
    this.isSugarDisabled = this.selectedDrink?.name === 'Chocolate';
    if (this.isSugarDisabled) this.extras.sugar = false;
    this.updateTotal();
  }

  onSizeChange() {
    // Mapping slider value to the DrinkSize enum
    switch (this.sliderValue) {
      case 0:
        this.selectedSize = DrinkSize.Small;
        break;
      case 1:
        this.selectedSize = DrinkSize.Medium;
        break;
      case 2:
        this.selectedSize = DrinkSize.Large;
        break;
      default:
        this.selectedSize = DrinkSize.Small;
    }
    this.updateTotal();
  }

  updateTotal() {
    if (this.selectedDrink) {
      // Calculate the total price based on selected drink, size, and extras
      this.totalPrice = this.priceCalculator.calculateTotal(
        this.selectedDrink,
        this.selectedSize,
        this.extras
      );
    }
  }

  purchase() {
    if (this.selectedDrink && this.totalPrice <= this.balance) {
      console.log('Navigating to details with params:', {
        drink: this.selectedDrink.name,
        size: this.selectedSize,
        sugar: this.extras.sugar,
        whippedCream: this.extras.whippedCream,
        total: this.totalPrice
      });

      // Navigate to the details screen and pass the parameters via queryParams
      this.router.navigate(['../details'], {
        queryParams: {
          drink: this.selectedDrink.name,
          size: this.selectedSize,
          sugar: this.extras.sugar,
          whippedCream: this.extras.whippedCream,
          total: this.totalPrice
        },
        relativeTo: this.route
      });
    } else {
      alert('Insufficient funds or no drink selected!');
    }
  }
}
