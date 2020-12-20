import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Post, PostsState, IPostsState } from "./models";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PlaceholderService<PostsState> {
  constructor(private http: HttpClient) {}

  private initialState = { posts: [], showUser: [] };

  private state$ = new BehaviorSubject<IPostsState>(this.initialState);

  getState(): Observable<IPostsState> {
    return this.state$.asObservable();
  }

  setState(newState: IPostsState) {
    this.state$.next({
      posts: newState.posts,
      showUser: newState.showUser
    });
  }

  resetState(): void {
    this.getPlaceHolders();
  }

  getPlaceHolders(): void {
    this.http
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
      .subscribe(res => {
        this.setState({
          posts: res,
          showUser: []
        });
      });
  }
}
