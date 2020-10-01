import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/entity/post/services/post.service';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css']
})
export class AllPostComponent implements OnInit {

  postList: Post[];

  constructor(private postService: PostService ) { 
    this.postService.getAllPosts().subscribe(value =>this.postList = value)
  }

  ngOnInit(): void {
  }

}
