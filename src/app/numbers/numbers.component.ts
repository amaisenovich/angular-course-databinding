import { Component, Input, OnInit } from '@angular/core';
import { Subscribe } from 'src/app/event-bus/subscribe.type';
import { Event } from 'src/app/event-bus/event.enum';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {
  @Input()
  subscribe: Subscribe

  numbers: number[] = []

  ngOnInit() {
    this.subscribe(Event.TICK, this.onTick)
  }

  onTick = (number) => {
    this.numbers.push(number)
  }
}
