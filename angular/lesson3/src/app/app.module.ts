import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UserComponent } from './entity/user/components/user/user.component';
import { AllUsersComponent } from './entity/user/components/all-users/all-users.component';
import { UserResolveService } from './entity/user/services/user-resolve.service';
import { AllPostsComponent } from './entity/post/components/all-posts/all-posts.component';
import { PostComponent } from './entity/post/components/post/post.component';
import { AllCommentsComponent } from './entity/comment/components/all-comments/all-comments.component';
import { CommentComponent } from './entity/comment/components/comment/comment.component';
import { PostResolveService } from './entity/post/services/post-resolve.service';
import { CommentResolveService } from './entity/comment/services/comment-resolve.service';
import { UserDetailsComponent } from './entity/user/user-details/user-details.component';
import { UserDetailsTwoComponent } from './entity/user/user-details-two/user-details-two.component';
import { UserDetailsTreeComponent } from './entity/user/user-details-tree/user-details-tree.component';
import { PostModule } from './modules/post/post.module';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AllUsersComponent,
    PostComponent,
    AllCommentsComponent,
    CommentComponent,
    UserDetailsComponent,
    UserDetailsTwoComponent,
    UserDetailsTreeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PostModule,
    RouterModule.forRoot([
      {
        path: 'users',
        component: AllUsersComponent,
        resolve: { xxx: UserResolveService },
        children: [
          // { path: 'details/:id', component: UserDetailsComponent }
          // { path: 'details/:id', component: UserDetailsTwoComponent },
          { path: 'details/:id', component: UserDetailsTreeComponent },
          { path: 'posts', component: AllPostsComponent },
        ],
      },
      // {
      //   path: 'posts',
      //   component: AllPostsComponent,
      //   resolve: { yyy: PostResolveService },
      // },
      {
        path: 'comments',
        component: AllCommentsComponent,
        resolve: { zzz: CommentResolveService },
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
