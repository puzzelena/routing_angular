import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
// to access the route parameter we need to inject it in the constructor
  constructor(private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.data
    .subscribe(
      (data: Data) => {
        this.server = data['server'];
      }
    );
  /*  const id = this.route.snapshot.params['id'];
    // after the snapshot is good to put id as a value in getServer method
    this.server = this.serversService.getServer(id);
    this.route.params
    .subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(params['1']);
      }
    )
    */
  }

  onEdit(){
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'})
  }

}