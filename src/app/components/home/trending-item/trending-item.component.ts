import { Component, Input, OnInit } from '@angular/core';
import { TRENDING } from 'src/app/data/TRENDING';

@Component({
  selector: 'app-trending-item',
  templateUrl: './trending-item.component.html',
  styleUrls: ['./trending-item.component.scss']
})
export class TrendingItemComponent implements OnInit {
  @Input() trending: TRENDING;

  constructor() { }

  ngOnInit(): void {
  }

}
