import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/app/data/product';
import { PRODUCT_T } from 'src/app/data/PRODUCT_T';
import { HostListener } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  collectionName: string;
  productName: string;
  product: PRODUCT_T = product;
  carouselWidth: number = 400;
  carouselHeight: number = 500;
  count: number = 1;

  screenHeight: number;
  screenWidth: number;

  images = [
    { path: this.product.img1 },
    { path: this.product.img2 },
    { path: this.product.img3 },
    { path: this.product.img4 },
  ]

  @HostListener('window:resize', ['$event'])
  // @ts-ignore
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 576) {
      this.carouselWidth = 250;
      this.carouselHeight = 250;
    }
    else if (this.screenWidth < 768) {
      this.carouselWidth = 300;
      this.carouselHeight = 300;
    }
    else {
      this.carouselWidth = 450;
      this.carouselHeight = 500;
    }
  }

  constructor(private route: ActivatedRoute, private router: Router) { this.getScreenSize(); }

  ngOnInit(): void {
    this.collectionName = this.route.snapshot.params['name'];
    this.productName = this.route.snapshot.params['product'];

  }

  incrCount(): void {
    this.count++;
  }

  decrCount(): void {
    if (this.count > 1)
      this.count--;
  }

  onSubmit() {
    this.router.navigate(["/cart"]);
  }
}
