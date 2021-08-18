import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};
// we need to inject the active route
// ActivatedRoute is special method of angular/route
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // here we will get our user
    this.user = {
      id: this.route.snapshot.params['id'],
      // it takes id from the app.module.ts where is declared dynamic id
      name: this.route.snapshot.params['name']
    }
  }

}
