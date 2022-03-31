import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent{
  posts: any;
  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { 
    http.get(this.url).subscribe(response =>{
      this.posts = response;
    });
  }

  createPost(input: HTMLInputElement){
    let post = {title: input.value};
    input.value= '';
    this.http.post(this.url,JSON.stringify(post))
      .subscribe(response =>{
        this.posts.unshift(post);
        console.log(response);
      });
  }
}
