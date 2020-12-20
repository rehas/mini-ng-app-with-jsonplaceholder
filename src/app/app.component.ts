import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  singlePost = {
    id: 5,
    userId: 10
  };
  name = "Angular " + VERSION.major + " hellox!";
}
