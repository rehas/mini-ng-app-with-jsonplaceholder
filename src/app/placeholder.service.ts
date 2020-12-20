import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Post, PostsState, IPostsState } from "./models";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PlaceholderService {
  constructor(private http: HttpClient) {}

  private initialState = new PostsState();

  private state$ = new BehaviorSubject<PostsState>(this.initialState);

  getState(): Observable<PostsState> {
    return this.state$.asObservable();
  }

  setState(newState: IPostsState) {
    this.state$.next({
      posts: newState.posts
    });
  }

  updatePost(newPost: Post) {
    let curState: PostsState;
    this.getState().subscribe(res => (curState = res));

    let foundIndex = curState.posts.findIndex(x => x.id == newPost.id);

    if (foundIndex == -1) {
      return;
    }

    curState.posts[foundIndex].showUser = !curState.posts[foundIndex].showUser;

    this.setState(curState);
  }

  resetState(): void {
    this.getPlaceHolders();
  }

  getPlaceHolders(): void {
    this.http
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
      .subscribe(res => {
        this.setState({
          posts: res
        });
      });
  }
}
