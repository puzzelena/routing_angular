import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { RouterModule, Routes } from '@angular/router';

// appRoutes will hold an array because we will have multiples routes
// each route is a js object in this array

const appRoutes: Routes = [
  // this structure always need a path that can be added at the end of the domain name
  { path: '', component: HomeComponent }, // it will look like localhost:4200/users
  // component shows which component should be loaded
  // HomeComponent as the starter page
  { path: 'users', component: UsersComponent },
  { path: 'users/:id/:name', component: UserComponent },
  // : -> shows that it is dynamic
  { path: 'servers', component: ServersComponent },
  { path: 'servers/:id/edit', component: EditServerComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
    // allows us to register routes to main application
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
