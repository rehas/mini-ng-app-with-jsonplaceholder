import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { PlaceholderService } from "../placeholder.service";
import { Post, PostsState } from "../models";

@Component({
  selector: "app-single-post",
  templateUrl: "./single-post.component.html",
  styleUrls: ["./single-post.component.css"]
})
export class SinglePostComponent implements OnInit {
  @Input() singlePost: Post;

  constructor(private placeholderService: PlaceholderService) {}

  ngOnInit() {}

  toggleUser() {
    this.placeholderService.updatePost(this.singlePost);
  }
}
