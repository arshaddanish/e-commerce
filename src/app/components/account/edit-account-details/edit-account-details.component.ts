import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-account-details',
  templateUrl: './edit-account-details.component.html',
  styleUrls: ['../login/login.component.scss']
})
export class EditAccountDetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.router.navigate(["/account"]);
  }
}
