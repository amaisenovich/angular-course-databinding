import { Component, Input, OnInit } from '@angular/core';
import { Subscribe } from 'src/models/Subscribe';
import { Event } from 'src/enums/Event'; Event

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
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
