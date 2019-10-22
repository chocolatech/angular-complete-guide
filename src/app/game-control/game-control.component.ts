import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() startCount = new EventEmitter()
  index = 0
  interval

  constructor() { }

  ngOnInit() {
  }

  onStartCount() {
    console.log('clicked')
    this.interval = setInterval(() => {
      this.startCount.emit(this.index + 1)
      this.index++
    }, 1000)
  }

  onStopCount() {
    clearInterval(this.interval)
  }

}
