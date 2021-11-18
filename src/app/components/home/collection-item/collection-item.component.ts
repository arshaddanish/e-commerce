import { Component, OnInit, Input } from '@angular/core';
import { COLLECTION } from 'src/app/data/COLLECTION';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collection-item',
  templateUrl: './collection-item.component.html',
  styleUrls: ['./collection-item.component.scss']
})
export class CollectionItemComponent implements OnInit {
  @Input() collection: COLLECTION;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirect(pagename: string) {
    this.router.navigate([pagename]);
  }
}
