import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { ServersService } from "../servers.service";

interface Server {
    id: number;
    name: string;
    status: string;
}

@Injectable()
// Resolve is a generic type and it should wrap data or item you will get or fetch here
// in our case we will fetch a srever here

// export class ServerResolver implements Resolve<{id: number, name: string, status: string}>{
// now we can replace it with the interface
export class ServerResolver implements Resolve<Server>{
    constructor(private serversService: ServersService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
        return this.serversService.getServer(+route.params['id']);
    }
}