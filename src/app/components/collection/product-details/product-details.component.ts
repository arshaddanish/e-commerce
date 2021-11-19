import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  collection: string;
  product: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.collection = this.route.snapshot.params['name'];
    this.product = this.route.snapshot.params['product'];
  }

}
