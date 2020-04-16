import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  listOfUsers:any = [];

  constructor(private dataService:DataService, private router:Router) { }

  ngOnInit(): void {
    this.dataService.getUsers().subscribe(
      users => {
        this.listOfUsers = users;
      });
  }

  onClick(userId:number){
    this.router.navigate( ['posts'],{ queryParams: { userId: userId} } );
  }

}
