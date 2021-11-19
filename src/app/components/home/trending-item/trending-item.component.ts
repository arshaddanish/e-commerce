import { Component, Input, OnInit } from '@angular/core';
import { TRENDING } from 'src/app/data/TRENDING';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trending-item',
  templateUrl: './trending-item.component.html',
  styleUrls: ['./trending-item.component.scss']
})
export class TrendingItemComponent implements OnInit {
  @Input() trending: TRENDING;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirect(pagename: string) {
    this.router.navigate([pagename]);
  }
}
