import { Component, OnInit } from '@angular/core';
import { TRENDING } from 'src/app/data/TRENDING';
import { trendings } from 'src/app/data/trendings';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: TRENDING[] = trendings;
  collection: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.collection = this.route.snapshot.params['name'];
  }

}
