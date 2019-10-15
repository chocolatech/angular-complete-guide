import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .whiteFont {
      color: white
    }
  `]
})
export class AppComponent {
  toggled = false
  clicks = []
  id = 0

  onButtonToggle() {
    this.toggled = !this.toggled

    // this.clicks.push(this.clicks.length + 1)
    this.clicks.push(new Date())
  }
}
