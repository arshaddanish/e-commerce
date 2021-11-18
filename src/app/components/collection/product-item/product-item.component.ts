import { Component, OnInit, Input } from '@angular/core';
import { TRENDING } from 'src/app/data/TRENDING';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: TRENDING;

  constructor() { }

  ngOnInit(): void {
  }

}
