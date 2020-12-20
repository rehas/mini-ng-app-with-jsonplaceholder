import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Post } from "./models";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PlaceholderService {
  posts = [];

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.posts;
  }

  getPlaceHolders(): Observable<Post[]> {
    return this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
  }
}
