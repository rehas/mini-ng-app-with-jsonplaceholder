export class Post {
  id: string;
  userId: string;
  title: string;
  body: string;
  showUser: boolean;
  constructor() {
    this.id = null;
    this.userId = null;
    this.title = null;
    this.body = null;
    this.showUser = false;
  }
}

export class PostsState implements IPostsState {
  posts: Post[];
  constructor() {
    this.posts = [];
  }
}

export interface IPostsState {
  posts: Post[];
}
