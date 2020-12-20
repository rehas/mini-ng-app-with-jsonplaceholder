export class Post {
  id: string;
  userId: string;
  title: string;
  body: string;
  constructor() {
    this.id = null;
    this.userId = null;
    this.title = null;
    this.body = null;
  }
}

export class PostsState {
  posts: Post[];
  showUser: number[];
  constructor() {
    this.posts = [];
    this.showUser = [];
  }
}

export interface IPostsState {
  posts: Post[];
  showUser: number[];
}
