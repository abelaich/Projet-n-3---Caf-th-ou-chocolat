import { Injectable } from '@angular/core';
import { Drink } from '../data/drink';
import { DrinkRepository } from './drink-repository';

@Injectable({
  providedIn: 'any'
})

export class DrinkRepositoryDummyImplService {
  public drinks: Drink[] = 
  [
    {name : "Coffee", prices: { small: 2.10, medium: 2.90, large: 3.20 } },
    {name : "Tea", prices: { small: 2.30, medium: 3.10, large: 4.30 } },
    {name : "Chocolate", prices: { small: 2.50, medium: 3.30, large: 5.10 } },
  ];
}
