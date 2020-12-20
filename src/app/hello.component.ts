import { Component, Input } from "@angular/core";

@Component({
  selector: "hello",
  template: `
    <h2>Angular {{ name }}!</h2>
    <h2>Click on a card to toggle userId</h2>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string;
}
