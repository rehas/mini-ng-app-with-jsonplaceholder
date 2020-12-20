import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { PlaceholderService } from "./placeholder.service";
import { SinglePostComponent } from "./single-post/single-post.component";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, SinglePostComponent],
  bootstrap: [AppComponent],
  providers: [PlaceholderService]
})
export class AppModule {}
