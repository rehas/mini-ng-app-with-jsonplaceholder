import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

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
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }
}
