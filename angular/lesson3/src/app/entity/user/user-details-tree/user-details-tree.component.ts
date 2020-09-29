import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details-tree',
  templateUrl: './user-details-tree.component.html',
  styleUrls: ['./user-details-tree.component.css'],
})
export class UserDetailsTreeComponent implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((value) => {
      console.log(value);
      console.log(this.router.getCurrentNavigation().extras.state);
    });
  }

  ngOnInit(): void {}
}
