import { Component, OnInit } from '@angular/core';
import { collections } from "../../../data/collections"
import { COLLECTION } from "../../../data/COLLECTION"

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {
  collections: COLLECTION[] = collections;

  constructor() { }

  ngOnInit(): void {
  }

}
