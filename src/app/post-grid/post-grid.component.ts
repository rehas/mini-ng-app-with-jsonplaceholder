import { Component, OnInit } from "@angular/core";
import { PlaceholderService } from "../placeholder.service";
import { Post } from "../models";

@Component({
  selector: "app-post-grid",
  templateUrl: "./post-grid.component.html",
  styleUrls: ["./post-grid.component.css"]
})
export class PostGridComponent implements OnInit {
  postList: Post[] = [];
  constructor(private placeholderService: PlaceholderService) {}

  ngOnInit() {
    this.placeholderService.getPlaceHolders().subscribe(posts => {
      this.postList = posts;
    });
    console.log(this.postList);
  }

  reset() {
    this.placeholderService.getPlaceHolders().subscribe(posts => {
      this.postList = posts;
    });
  }
}
