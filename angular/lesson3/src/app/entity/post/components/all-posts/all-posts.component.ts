import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css'],
})
export class AllPostsComponent {
  postsList: Post[] = [];

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe((value) => (this.postsList = value.yyy));
  }
}
