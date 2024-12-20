import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {
  drink: string | null = null;
  size: string | null = null;
  sugar: boolean = false;
  whippedCream: boolean = false;
  total: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params) {
        console.log('Received params:', params);
        this.drink = params['drink'];
        this.size = params['size'];
        this.sugar = params['sugar'] === 'true'; // Convert string 'true' to boolean
        this.whippedCream = params['whippedCream'] === 'true'; // Convert string 'true' to boolean
        this.total = params['total'];
      } else {
        console.log('No query parameters received.');
      }
    });
  }
  
  
}
