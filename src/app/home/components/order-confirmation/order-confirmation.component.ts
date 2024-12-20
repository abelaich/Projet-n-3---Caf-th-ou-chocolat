import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Drink, DrinkSize } from '../../data/drink';
import { PriceCalculatorService } from '../../repository/price-calculator-service.service.spec';
import { DrinkRepositoryDummyImplService } from '../../repository/drink-repository-dummy-impl.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.scss'],
})
export class OrderConfirmationComponent implements OnInit {
  @Input() total: number = 0;
  @Input() drink: string = '';
  @Input() size: string = '';
  @Input() sugar: boolean = false;
  @Input() whippedCream: boolean = false;

  drinkDetails: Drink | null = null;
  drinkPrice: number = 0;

  constructor(
    private priceCalculator: PriceCalculatorService,
    private drinkRepository: DrinkRepositoryDummyImplService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params) {
        // Récupérer les paramètres de la commande
        this.drink = params['drink'];
        this.size = params['size'];
        this.sugar = params['sugar'] === 'true';
        this.whippedCream = params['whippedCream'] === 'true';
        this.total = Number(params['total']) || 0;

        // Trouver la boisson dans le repository
        this.drinkDetails = this.drinkRepository.drinks.find(
          (d) => d.name === this.drink
        ) || null;

        // Récupérer le prix de la boisson en fonction de la taille choisie
        if (this.drinkDetails) {
          this.drinkPrice = this.drinkDetails.prices[this.size as DrinkSize];
        }
      }
    });
  }

  confirmOrder() {
    if (!this.drinkDetails) {
      alert('Drink not found!');
      return;
    }

    // Construction du résumé de la commande
    const drinkDetails = `${this.size} ${this.drink} - ${this.drinkPrice.toFixed(2)} EUR`;
    const supplementDetails = this.getSupplementDetails();
    const totalPrice = this.calculateTotalPrice();

    const subject = `Order Confirmation`;
    const body = `
  Drink: ${drinkDetails}\nSupplements: ${supplementDetails}\nTotal: ${totalPrice.toFixed(2)} EUR
`.trim();


    const mailtoLink = `mailto:coffee-m2sime@univ-rouen.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Ouvrir le client de messagerie
    window.location.href = mailtoLink;

    console.log('Order confirmed!');
    alert('Your order has been placed!');
  }

  // Calculer le prix total en fonction des suppléments
  calculateTotalPrice(): number {
    if (this.drinkDetails) {
      return this.priceCalculator.calculateTotal(
        this.drinkDetails,
        this.size as DrinkSize,
        { sugar: this.sugar, whippedCream: this.whippedCream }
      );
    }
    return 0;
  }

  // Préparer la description des suppléments
  getSupplementDetails(): string {
    const supplements: string[] = [];
    if (this.sugar) supplements.push(`Sugar - 0 EUR`); 
    if (this.whippedCream) supplements.push(`Whipped cream - 1.50 EUR`);
    if (supplements.length === 0) supplements.push('No supplements');
    return supplements.join(', ');
  }
  capitalizeWords(text: string): string {
    return text.replace(/\b\w/g, (char) => char.toUpperCase());
  }
}