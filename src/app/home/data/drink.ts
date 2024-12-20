export enum DrinkSize {
    Small = 'small',
    Medium = 'medium',
    Large = 'large',
  }
  
  export interface Drink {
    name: string;
    prices: Record<DrinkSize, number>;
  }
  