import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  listOfPosts:any = [];

  constructor(private dataService:DataService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.dataService.getPosts(this.route.snapshot.queryParams).subscribe(
      posts => {
        this.listOfPosts = posts;
      });;
  }

}
