import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
// we can inject this router
  constructor(private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
  }

  onLoadServer(id: number){
    // complex calculation
    // navigate takes an argument that allows us to navitate to
    // we pass an array that contains many elements of diferent paths
    this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: '1'}, fragment: 'loading'})
    // with navigate we trigger it in our code
    // we added an absolute path here
  }

  onLogin(){
    this.authService.login();
  }

  onLogout(){
    this.authService.logout();
  }

}
