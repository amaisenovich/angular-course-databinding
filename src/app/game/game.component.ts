import { Component, Input } from '@angular/core';
import { Notify } from 'src/models/Notify';
import { Event } from 'src/enums/Event';

const GAME_TICK_INTERVAL_MS = 100

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  @Input()
  notify: Notify

  intervalId: number;

  tickId = 0;

  tick = () => {
    this.notify(Event.TICK, this.tickId)
    this.tickId++
  }

  onStart = () => {
    this.tick()

    this.intervalId = window.setInterval(
      () => {
        this.intervalId && this.tick()
      },
      GAME_TICK_INTERVAL_MS
    )
  }

  onStop = () => {
    this.intervalId && window.clearInterval(this.intervalId)
    this.intervalId = 0
  }
}
