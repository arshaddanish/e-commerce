import { Component, OnInit, Input } from '@angular/core';
import { TRENDING } from 'src/app/data/TRENDING';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: TRENDING;
  @Input() collection: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirect(pagename: string) {
    this.router.navigate([pagename]);
  }

}
