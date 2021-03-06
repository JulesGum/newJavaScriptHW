import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/models/Coment';
import { CommentService } from './comment.service';

@Injectable({
  providedIn: 'root',
})
export class CommentResolveService implements Resolve<Comment[]> {
  constructor(private commentService: CommentService) {}

  resolve(): Observable<Comment[]> | Promise<Comment[]> | Comment[] {
    return this.commentService.getComments();
  }
}
