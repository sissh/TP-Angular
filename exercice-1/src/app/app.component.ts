import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = "";
  font = "Arial";
  size = 36;
  left = false;
  center = false;
  right = false;
  alignment = "left";

  updateName() {
    this.name = this.name.toUpperCase();
  }

  updateFont() {
    this.font = this.font;
  }

  updateSize() {
    this.size = this.size;
  }

  updateAlignment() {
    if (this.left) {
      this.alignment = 'left';
    } else if (this.center) {
      this.alignment = 'center';
    } else if (this.right) {
      this.alignment = 'right';
    }
  }
}
