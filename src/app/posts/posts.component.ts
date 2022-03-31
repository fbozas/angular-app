import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  posts: any;
  

  constructor(private service: PostService) { 
    
  }

  ngOnInit(): void {
    this.service.getPosts()
    .subscribe(response =>{
        this.posts = response;
    });
  }

  createPost(input: HTMLInputElement){
    let post = {title: input.value};
    input.value= '';
    this.service.createPost(post)
      .subscribe(response =>{
        this.posts.unshift(post);
        console.log(response);
      });
  }

  updatePost(post:any){
    this.service.updatePost(post)
      .subscribe(response => {
        console.log(response);
      });
  }

  deletePost(post: any){
    this.service.deletePost(post.id)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index,1);
        console.log(response);
      })
  }
}
