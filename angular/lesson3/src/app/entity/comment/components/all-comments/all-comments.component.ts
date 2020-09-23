import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from '../../services/comment.service';
import { Comment } from 'src/app/models/Coment';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css'],
})
export class AllCommentsComponent {
  commentsList: Comment[] = [];

  constructor(private activatedRouter: ActivatedRoute) {
    this.activatedRouter.data.subscribe(
      (value) => (this.commentsList = value.zzz)
    );
  }
}
