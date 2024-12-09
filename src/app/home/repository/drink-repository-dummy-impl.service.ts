import { Injectable } from '@angular/core';
import { Drink } from '../data/drink';
import { DrinkRepository } from './drink-repository';

@Injectable({
  providedIn: 'any'
})

export class DrinkRepositoryDummyImplService extends DrinkRepository{
  public drinks: Drink[] = [
    { name: 'Coffee', prices: { small: 2.1, medium: 2.9, large: 3.2 } },
    { name: 'Tea', prices: { small: 2.3, medium: 3.1, large: 4.3 } },
    { name: 'Chocolate', prices: { small: 2.5, medium: 3.3, large: 5.1 } },
  ];
}
