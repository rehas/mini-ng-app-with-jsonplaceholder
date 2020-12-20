import { Component, OnInit } from "@angular/core";
import { PlaceholderService } from "../placeholder.service";
import { Post, PostsState } from "../models";

@Component({
  selector: "app-post-grid",
  templateUrl: "./post-grid.component.html",
  styleUrls: ["./post-grid.component.css"]
})
export class PostGridComponent implements OnInit {
  postList: Post[] = [];
  showUser: number[];
  constructor(private placeholderService: PlaceholderService<PostsState>) {}

  ngOnInit() {
    this.placeholderService.getState().subscribe(res => {
      this.postList = res.posts;
      this.showUser = res.showUser;
    });
  }

  reset() {
    this.placeholderService.resetState();
  }
}
