import { Component, Input } from '@angular/core';
import { Drink } from '../../data/drink';
import { DrinkRepository } from '../../repository/drink-repository';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.scss'],
})
export class DrinkComponent {

  drinks: Drink[] = [];
  selectedDrink!: Drink;
  selectedSize = 'small';
  addWhippedCream = false;
  availableBalance = 20.0;
  total = 0.0;

  constructor(private drinkRepository: DrinkRepository) {
    this.drinks = drinkRepository.drinks;
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  updateTotal(): void {
    console.log(`Drink selected: ${this.selectedDrink}`);
    // Logique pour recalculer le total sera ajoutée ici.
  }

}
