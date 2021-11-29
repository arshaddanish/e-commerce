import { Component, OnInit } from '@angular/core';
import { cart } from 'src/app/data/cart';
import { CART_T } from 'src/app/data/CART_T';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cart: CART_T[] = cart;
}
