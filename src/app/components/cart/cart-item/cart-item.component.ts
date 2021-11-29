import { Component, Input, OnInit } from '@angular/core';
import { CART_T } from 'src/app/data/CART_T';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() item: CART_T;

  constructor() { }

  ngOnInit(): void {
  }

}
