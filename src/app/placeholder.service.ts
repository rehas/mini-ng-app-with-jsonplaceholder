import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Post } from "./models";

@Injectable({
  providedIn: "root"
})
export class PlaceholderService {
  posts = [];

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.posts;
  }

  getPlaceHolders() {
    return this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
  }
}
