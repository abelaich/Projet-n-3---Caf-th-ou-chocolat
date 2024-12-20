import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.scss'],
})
export class OrderConfirmationComponent {
  @Input() total: number = 0;

  confirmOrder() {
    console.log('Order confirmed!');
    alert('Your order has been placed!');
  }
}
