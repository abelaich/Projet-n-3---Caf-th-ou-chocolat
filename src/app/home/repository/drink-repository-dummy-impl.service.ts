import { Injectable } from '@angular/core';
import { Drink } from '../data/drink';
import { DrinkRepository } from './drink-repository';

@Injectable({
  providedIn: 'any'
})

export class DrinkRepositoryDummyImplService extends DrinkRepository{
  public drinks: Drink[] = [];
}
