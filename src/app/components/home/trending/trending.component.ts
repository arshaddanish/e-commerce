import { Component, OnInit } from '@angular/core';
import { TRENDING } from 'src/app/data/TRENDING';
import { trendings } from 'src/app/data/trendings';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {
  trendings: TRENDING[] = trendings;

  constructor() { }

  ngOnInit(): void {
  }

}
