import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css'],
})
export class AllPostsComponent {
  postsList: Post[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService
  ) {
    this.activatedRoute.queryParams.subscribe((value) => {
      console.log(value);
      this.postService
        .getPostByUserId(value.id)
        .subscribe((value) => console.log(value));
      this.activatedRoute.data.subscribe(
        (value) => (this.postsList = value.yyy)
      );
    });
  }
}
