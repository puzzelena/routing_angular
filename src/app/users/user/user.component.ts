import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription
// we need to inject the active route
// ActivatedRoute is special method of angular/route
  constructor(private route: ActivatedRoute) { }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe()
  }

  ngOnInit() {
    // here we will get our user
    this.user = {
      id: this.route.snapshot.params['id'],
      // it takes id from the app.module.ts where is declared dynamic id
      name: this.route.snapshot.params['name']
    }
    // route has params itself
    // params here are observable
    // observables are the features used by Angular which allow you to 
    // work with asynchronous tasks
    // observable may you to subscribe to an event which might
    // happen in the future to then execute some code
    this.paramsSubscription = this.route.params
    .subscribe(
      // here we will get an updated parameters of type Params
      // Params will be always an object that we pass which holds the parameters defined in the routes
      (params: Params) => {
        this.user.id = params['id']
        this.user.name = params['name']
        // this now will update the user object
        // when the parameter will change
        // this function will be called just when the parameters will change
      }
    );
    // we call the subscribe method
    // the first parameter should be a function

    /*ngOnDestroy() {
      this.paramsSubscription.unsubscribe()
    }
    */

  }

}

