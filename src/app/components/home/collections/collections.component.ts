import { Component, OnInit } from '@angular/core';
import { collections } from "../../../collections"
import { COLLECTION } from "../../../COLLECTION"

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
