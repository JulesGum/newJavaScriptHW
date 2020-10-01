import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllPostComponent } from './components/all-post/all-post.component';
import { PostComponent } from './components/post/post.component';
import { PostService } from 'src/app/entity/post/services/post.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AllPostComponent, PostComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot([{ path: 'post', component: AllPostComponent }]),
  ],
  providers: [PostService],
})
export class PostModule {}
