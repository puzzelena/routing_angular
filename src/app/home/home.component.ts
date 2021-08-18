import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
// we can inject this router
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLoadServers(){
    // complex calculation
    // navigate takes an argument that allows us to navitate to
    // we pass an array that contains many elements of diferent paths
    this.router.navigate(['/servers'])
    // with navigate we trigger it in our code
    // we added an absolute path here
  }

}
