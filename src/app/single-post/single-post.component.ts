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
  public userVisible: boolean = false;
  @Input() singlePost;

  constructor(private placeholderService: PlaceholderService) {}

  ngOnInit() {
    this.userVisible = this.singlePost.showUser;
  }

  toggleUser() {
    console.log("toggleclick");
    console.log(this.singlePost);
    this.placeholderService.updatePost(this.singlePost);
  }
}
