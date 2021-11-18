import { Component, OnInit } from '@angular/core';
import { TRENDING } from 'src/app/data/TRENDING';
import { trendings } from 'src/app/data/trendings';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: TRENDING[] = trendings;

  constructor() { }

  ngOnInit(): void {
  }

}
