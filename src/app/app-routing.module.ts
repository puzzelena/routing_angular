import { ErrorHandler, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./auth-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";

import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CanDeactivateGuard } from "./servers/edit-server/can-deactivate-guard.service";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";

// appRoutes will hold an array because we will have multiples routes
// each route is a js object in this array

const appRoutes: Routes = [
    // this structure always need a path that can be added at the end of the domain name
    {
        path: '',
        component: HomeComponent 
    }, // it will look like localhost:4200/users
    // component shows which component should be loaded
    // HomeComponent as the starter page
    {
        path: 'users',
        component: UsersComponent,
    children: [
      {
        path: ':id/:name',
        component: UserComponent
      },
    ]
    },
    // : -> shows that it is dynamic
    {
        path: 'servers',
        //canActivate:[AuthGuard],
        canActivateChild: [AuthGuard],
        component: ServersComponent,
    children: [
      {
        path: '/:id',
        component: ServerComponent
      },
      {
        path: '/:id/edit',
        component: EditServerComponent,
        canDeactivate: [CanDeactivateGuard]
      },
      // component loads specified component and its content
    ] },
   /* { 
        path: 'not-found', 
        component: PageNotFoundComponent
    },
    */
    { 
        path: 'not-found',
        component: ErrorPageComponent,
        data: {message: 'Page not found!'}
    },
    {
        path: '**',
        redirectTo: '/not-found'
    }
    // redirectTo redirects to another path
    // ** this is wildcard route that catch all paths and the order is important here
    // make sure that this generic route is the last one in the routes
    // because routes pass from the top to the bottom
    // if we write something wrong in the path it takes ** route and redirect it to
    // not-found path with the component created PageNotFoundComponent
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}