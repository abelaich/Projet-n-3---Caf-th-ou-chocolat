import { Drink } from "../data/drink";

export abstract class DrinkRepository {
    public abstract drinks: Drink[];
}
